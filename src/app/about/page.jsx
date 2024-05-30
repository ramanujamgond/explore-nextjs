import Image from "next/image";
import Styles from "./about.module.css";

const AboutPage = () => {
    return (
        // <div>
        //     {/* <Image src="/about.png" alt="" width={500} height={500} /> */}
        //     <div className={Styles.imgContainer}>
        //         {/* <Image src="/about.png" alt="" fill /> */}
        //         <Image src="https://images.pexels.com/photos/19395799/pexels-photo-19395799/free-photo-of-aerial-view-of-paris-on-the-banks-of-river-seine-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
        //     </div>
        // </div>
        <div className={Styles.container}>
            <div className={Styles.textContainer}>
                <h2 className={Styles.subtitle}>About Agency</h2>
                <h1 className={Styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className={Styles.desc}>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We're world's Our Special Team best consulting & finance solution provider. Wide range of web and software development services.</p>
                <div className={Styles.boxes}>
                    <div className={Styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={Styles.box}>
                        <h1>234 K+</h1>
                        <p>People reached</p>
                    </div>
                    <div className={Styles.box}>
                        <h1>5 K+</h1>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={Styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={Styles.img} />
            </div>
        </div>
    )
}
export default AboutPage;