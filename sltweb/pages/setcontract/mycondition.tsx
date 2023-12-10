import { NextPage } from "next";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { Wallet, ethers } from "ethers";
import { Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/addresses";
import { useEffect, useState } from "react";

export default function MyCondition() {
  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <div className="flex">
          <p style={{marginBottom:"12px"}}>내가 설정한 구매 조건을 확인하려면 '구매 설정 확인'을 눌러주세요</p>
          <p style={{marginBottom:"30px"}}>내가 설정한 판매 조건을 확인하려면 '판매 설정 확인'을 눌러주세요</p>
          <div style={{alignItems:"center", marginTop:"60px"}}>
            <button className={styles.web3button}>
              <Link className={styles.link} href='/setcontract/mycondition/buycondition'>
                구매 설정 확인
              </Link>
            </button>
            <button className={styles.web3button}>
              <Link className={styles.link} href='/setcontract/mycondition/sellcondition'>
                판매 설정 확인
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}