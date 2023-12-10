import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { contract } from "web3/lib/commonjs/eth.exports";

export default function ChangeInfo() {
  const [changeInfo, setChangeInfo] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  function resetName() {
    setName("");
  }
  function resetAddress() {
    setAddress("");
  }
  function resetRole() {
    setRole("");
  }
  
  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <div className={styles.info}>
          변경 후 이름을 입력하세요
        </div>
        <div className={styles.info_blank}>
          <input 
            className={styles.typeinbox}
            type="text" 
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e)=>setName(e.target.value)}>
          </input>
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract)=>contract.call(
              "changeClientName",[name]
            )}
            onSuccess={() => {
              resetName();
              alert("이름이 변경되었습니다");
            }}
            >이름 변경</Web3Button>
        </div>
        <div className={styles.info}>
          변경 후 주소를 입력하세요
        </div>
        <div className={styles.info_blank}>
        <input 
            className={styles.typeinbox}
            type="text" 
            placeholder="주소를 입력하세요"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}>
          </input>
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract)=>contract.call(
              "changeClientAddress",[address]
            )}
            onSuccess={() => {
              resetAddress();
              alert("주소가 변경되었습니다");
            }}
            >주소 변경</Web3Button>
        </div>
        <div className={styles.info}>
          변경할 역할(Buyer / Seller)을 입력하세요
        </div>
        <div style={{marginBottom:"20px"}}>
        <input 
            className={styles.typeinbox}
            type="text" 
            placeholder="Buyer / Seller"
            value={role}
            onChange={(e)=>setName(e.target.value)}>
          </input>
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract)=>contract.call(
              "changeClientRole",[role]
            )}
            onSuccess={() => {
              resetRole();
              alert("역할이 변경되었습니다");
            }}
            >역할 변경</Web3Button>
        </div>
        <div className="flex">
            <button className={styles.web3button}>
              <Link className={styles.link} href="/">돌아가기</Link>
            </button>
        </div>
      </div>
    </div>
  )
}