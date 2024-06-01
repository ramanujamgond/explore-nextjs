"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utlis";

export const addPost = async (formData) => {
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
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}

export const deletePost = async (formData) => {
    // "use server";

    const { id } = Object.fromEntries(formData);
    console.log("id id id", id);

    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}