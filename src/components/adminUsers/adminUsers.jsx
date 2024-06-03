import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

const AdminUsers = async () => {
    const users = await getUsers();
    return (
        <div className={styles.container}>
            <h1>Users</h1>
            {users.map(user => (
                <div className={styles.user} key={user.id}>
                    <div className={styles.detail}>
                        <Image src={user.img || "/noAvatar.png"} alt="" width={50} height={50} />
                        <span className={styles.userTitle}>{user.username}</span>
                    </div>
                    {/* <form action={() => deletePostWithId(post.id)}> */}
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button className={styles.postButton}>Delete</button>
                    </form>
                </div>
            ))}
        </div>
    )
}
export default AdminUsers;