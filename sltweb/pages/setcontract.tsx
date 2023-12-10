import { NextPage } from "next";
import styles from "/styles/Home.module.css";
import Link from "next/link";

export default function SetContract() {
  return(
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <div style={{textAlign: 'center', fontSize:"20px"}}>
          <p>구매 조건을 설정하시려면 '구매 조건 설정'을 눌러주세요</p>
          <p style={{marginTop:'40px'}}>판매 조건을 설정하시려면 '판매 조건 설정'을 눌러주세요</p>
          <p style={{marginTop:'40px'}}>내가 설정한 구매/판매 조건을 확인하시려면 '내 설정 확인'을 눌러주세요</p>
        </div>
        <div className="flex">
          <div style={{marginTop:'80px'}}>
            <button className={styles.web3button}>
              <Link className={styles.link} href='/setcontract/buyer'>
                구매 조건 설정
              </Link>
            </button>
            <button className={styles.web3button}>
              <Link className={styles.link} href="/setcontract/seller">
                판매 조건 설정
              </Link>
            </button>
            <button className={styles.web3button}>
              <Link className={styles.link} href="/setcontract/mycondition">
                내 설정 확인
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}