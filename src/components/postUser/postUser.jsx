import { getUser } from '@/lib/data';
import styles from './postUser.module.css';

// FETCH DATA WITH AN fetch API
// const getUserName = async (userId) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" })

//     if (!response.ok) {
//         throw new Error("Something went wrong");
//     }

//     return response.json();
// }

const PostUser = async ({ userId }) => {
    // const userData = await getUserName(userId);

    const userData = await getUser(userId);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{userData.username}</span>
        </div>
    )
}
export default PostUser;