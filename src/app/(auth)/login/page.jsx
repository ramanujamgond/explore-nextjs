import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";
// import { auth } from "@/lib/auth";

const LoginPage = () => {

    // const session = await auth();
    // console.log(session);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}>Login with Github</button>
                </form>
                <LoginForm />
            </div>
        </div>
    )
}
export default LoginPage;