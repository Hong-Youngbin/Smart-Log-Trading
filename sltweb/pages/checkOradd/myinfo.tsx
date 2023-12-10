import { NextPage } from "next";
import styles from "/styles/Home.module.css";
import Link from "next/link";
import { Wallet, ethers } from "ethers";
import { Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/addresses";

export default function CheckInfo() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  const address = useAddress();
  const{
      data: clientInfo,
      isLoading: isLoadingMyinfo
  } = useContractRead(
      contract,
     "getClientInfoMapping",
     [address]
  );
  const{
    data: role,
    isLoading: isLoadingRole
  } = useContractRead(
    contract,
    "getRole",
    [address]
  );

  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        {isLoadingMyinfo || isLoadingRole? (
          <p>Loading...</p>
        ) : (
        <div>
        <div className={styles.info}>
          이름
        </div>
        <div className={styles.typeinbox}>
          {clientInfo?.clientName}
        </div>
        <div className={styles.info}>
         주소
        </div>
        <div className={styles.typeinbox}>
          {clientInfo?.clientAddress}
        </div>
        <div className={styles.info}>
          지갑주소
        </div>
        <div className={styles.typeinbox}>
          {clientInfo?.clientWalletAddress}
        </div>
        <div className={styles.info}>
          역할(구매자 / 판매자)
        </div>
        <div className={styles.typeinbox}>
          {clientInfo?.clientRole}
        </div>
        </div>
        )}  
        <div className="flex">
          <button className={styles.web3button}>
            <Link className={styles.link} href="/checkOradd">확인</Link>
          </button>
          <button className={styles.web3button}>
            <Link className={styles.link} href="/checkOradd">취소</Link>
          </button>
        </div>
      </div>
    </div>
  )
}