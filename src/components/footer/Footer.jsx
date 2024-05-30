import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo Footer</div>
            <div className={styles.text}>Footer creative thoughts agency © All rights reserved.</div>
        </div>
    )
}
export default Footer;