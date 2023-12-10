import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/addresses";
import { contract } from "web3/lib/commonjs/eth.exports";

export default function SetRole() {
  const [addRole, setAddRole] = useState(false);
  const [role, setRole] = useState("");
  function resetForm() {
    setRole("");
  }

  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <div className={styles.info}>
          당신의 역할을 입력하세요
        </div>
        <div className={styles.blank}>
         <input 
            className={styles.typeinbox}
            type="text" 
            placeholder="구매자(Buyer)/판매자(Seller)"
            value={role}
            onChange={(e)=>setRole(e.target.value)}>
          </input>
        </div>
        <div className="flex, mt-14">
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract) => contract.call(
              "setRole",
              [role]
            )}
            onSuccess={() => {
              resetForm();
              alert("입력하신 정보가 저장되었습니다");
            }}
            >역할 설정</Web3Button>
          <button className={styles.web3button}>
            <Link className={styles.link} href="/checkOradd">취소</Link>
          </button>
        </div>
      </div>
    </div>
  )
}