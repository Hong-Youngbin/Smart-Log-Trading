import { NextPage } from "next";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { BigNumber, Wallet, ethers } from "ethers";
import { Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../../const/addresses";
import { useEffect, useState } from "react";

export default function CheckInfo() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const address = useAddress();
  const{
      data: myCondition,
      isLoading: isLoadingMyCondition
  } = useContractRead(
      contract,
     "getSellerCondition",
     [address]
  );
  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        {isLoadingMyCondition ? (
          <p>Loading...</p>
        ) : (
        <div>
          <div className={styles.info}>
            수종
          </div>
          <div className={styles.info_blank}>
            {myCondition?.species}
          </div>
          <div className={styles.info}>
            수량
          </div>
          <div className={styles.info_blank}>
            {JSON.stringify(myCondition?.quantity)}
          </div>
          <div className={styles.info}>
            등급
          </div>
          <div className={styles.info_blank}>
            {myCondition?.grade}
          </div>
        </div>
        )}  
      </div>
    </div>
  )
}