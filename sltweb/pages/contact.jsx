import { NextPage } from "next";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function Contact() {
  return(
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <p>ybinh94@snu.ac.kr</p>
        <p>010.8426.6857</p>
      </div>
    </div>
  )
}