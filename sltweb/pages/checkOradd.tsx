import { NextPage } from "next";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function CheckOrAddInfo() {
  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <div style={{textAlign: 'center', marginBottom: "60px"}}>
          <p style={{marginBottom: '30px'}}>내가 설정한 이름, 주소, 지갑정보를 확인하려면 '내 정보 확인'을 눌러주세요</p>
          <p style={{marginTop:'20px'}}>신규 고객이라면 '내 정보 추가'를 눌러주세요</p>
        </div>
        <div className="flex">
          <button className={styles.web3button}>
            <Link className={styles.link} href='/checkOradd/myinfo'>
              내 정보 확인
            </Link>
          </button>
          <button className={styles.web3button}>
            <Link className={styles.link} href="/checkOradd/addinfo">내 정보 추가</Link>
          </button>
          <button className={styles.web3button}>
            <Link className={styles.link} href="/checkOradd/setrole">내 역할 설정</Link>
          </button>
        </div>
      </div>
    </div>
  )
}