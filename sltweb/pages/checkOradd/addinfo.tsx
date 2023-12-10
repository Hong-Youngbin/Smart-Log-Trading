import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/addresses";
import { contract } from "web3/lib/commonjs/eth.exports";

export default function AddInfo() {
  const [addInfo, setAddInfo] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function resetForm() {
    setName("");
    setAddress("");
  }

  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <div className={styles.info}>
          이름을 입력하세요
        </div>
        <div className={styles.blank}>
         <input
            className={styles.typeinbox}
            type="text" 
            placeholder="당신의 이름을 입력하세요"
            value={name}
            onChange={(e)=>setName(e.target.value)}>
          </input>
        </div>
        <div className={styles.info}>
        거래에 이용할 주소를 입력하세요
        </div>
        <div className={styles.blank}>
          <input 
            className={styles.typeinbox}
            type="text" 
            placeholder="서울시 XX구 XX길 XX"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            ></input>
        </div>
        <div className="flex">
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract) => contract.call(
              "addClientInfoMapping",
              [
                name,
                address
              ]
            )}
            onSuccess={() => {
              resetForm();
              setAddInfo(false);
              alert("입력하신 정보가 저장되었습니다");
            }}
            >정보 추가</Web3Button>
          <button className={styles.web3button}>
            <Link className={styles.link} href="/checkOradd">취소</Link>
          </button>
        </div>
      </div>
    </div>
  )
}