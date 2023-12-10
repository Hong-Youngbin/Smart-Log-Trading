import { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../../const/addresses";
import { contract } from "web3/lib/commonjs/eth.exports";

export default function SetBuyerContract() {
  
  const [condition, setCondition] = useState(false);
  const [species, setSpecies] = useState("");
  const [quantity, setQuantity] = useState("");
  const [grade, setGrade] = useState("");

  function resetForm() {
    setSpecies("");
    setQuantity("");
    setGrade("");
  }

  return(
    <div style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
      <div className={styles.info_box}>
        <div className="flex">
          <p>판매하고자 하는 수종을 입력하세요</p>
          <input
            className={styles.typeinbox}
            type="text"
            placeholder="수종을 입력하세요"
            value={species}
            onChange={(e)=>setSpecies(e.target.value)}>
          </input>
          <p>판매하고자 하는 원목의 수량을 입력하세요</p>
          <input
            className={styles.typeinbox}
            type="text"
            placeholder="수량을 입력하세요"
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}>
          </input>
          <p>판매하고자 하는 원목의 등급을 입력하세요</p>
          <input
            className={styles.typeinbox}
            type="text"
            placeholder="등급을 입력하세요"
            value={grade}
            onChange={(e)=>setGrade(e.target.value)}>
          </input>
        </div>
        
        <div className="flex">
          <Web3Button
            contractAddress={CONTRACT_ADDRESS}
            action={(contract)=>contract.call(
              "makeSellerContract",
              [species,quantity,grade]
            )}
            onSuccess={() => {
              resetForm();
              setCondition(false);
              alert("입력하신 판매 정보가 저장되었습니다");
            }}
            >판매 정보 저장</Web3Button>
          <button className={styles.web3button}>
            <Link className={styles.link} href="/">취소</Link>
          </button>
        </div>
      </div>
    </div>
  )
}