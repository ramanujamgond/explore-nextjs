"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utlis";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
    // "use server";

    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");
    // const userId = formData.get("userId");

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log("Save to db");
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}

export const deletePost = async (formData) => {
    // "use server";

    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}

export const addUser = async (prevState, formData) => {

    const { username, email, password, img } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newUser = new User({ username, email, password, img });

        await newUser.save();
        console.log("Save to db");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}

export const deleteUser = async (formData) => {
    // "use server";

    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}


export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
}

export const handleLogout = async () => {
    "use server";
    await signOut();
}

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        // return "Passwords do not match";
        // throw new Error("Passwords do not match");
        return { error: "Passwords do not match" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        connectToDb();
        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists" };
        }

        const newUser = new User({ username, email, password: hashedPassword, img });
        await newUser.save();
        console.log("Saved to db");

        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" };
    }
}

export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (error) {
        console.log(error);

        if (error.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        // return { error: "Something went wrong!" };
        throw error;
    }
}