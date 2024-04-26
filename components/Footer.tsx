import Image from "next/image";
import phone from "../img/phone.png";
import message from "../img/message.png";
import styles from "./componentsStyles/Footer.module.css";

export default function Footer() {

    return (
        <div className={styles.totalDiv}>
            {/* center */}
            <div className={styles.centerDiv}>
                <div className={styles.centerDetailDiv}>
                    <Image src={phone} alt="phone image"/>
                    <h2>010-4244-4595</h2>
                </div>
                <div className={styles.centerDetailDiv}>
                    <Image src={message} alt="message image"/>
                    <h2>chohr1844@gmail.com</h2>
                </div>
            </div>

            {/* right */}
            <div className={styles.rightDiv}>
                <h3>ⓒ Copyright 2024. Cho Harim</h3>
            </div>
        </div>
    )
}