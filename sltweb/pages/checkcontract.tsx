import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Web3Button } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_PAYMENT_ADDRESS } from "../const/addresses";
import { utils } from "ethers";

const contractAddress = CONTRACT_PAYMENT_ADDRESS;
function SepoliaPopup() {
  window.open("https://sepolia.etherscan.io/");
}
export default function CheckContract() {
  const { contract } = useContract(contractAddress);
  const {mutateAsync, isLoading, error} = useContractWrite(
    contract,
    "ethPayment",
  );
  return (
    <div style={{display:"flex", alignItems: "center", justifyContent: "center", textAlign: "center"}}>
      <div className={styles.info_box}>
        <div style={{fontSize:"20px"}}>
          <p>거래 후 확인한 'Tx Hash'를 아래 링크를 클릭하여 입력하세요</p>
          <p>체결된 거래에 관한 내용을 확인할 수 있습니다</p>
        </div>
        <button onClick={SepoliaPopup} className={styles.web3button2}>
          Sepolia Testnet으로 이동하기
        </button>
        <div style={{fontSize:"20px"}}>
          <p>거래대상자 선정 과정이 완료되면 아래에 '결제' 버튼이 나타납니다</p>
          <p>'결제' 버튼을 눌러 거래를 진행하세요</p>
        </div>
        <Web3Button
          contractAddress={contractAddress}
          action = {() => 
            mutateAsync({
              args: ["0x424816c9A7f580355a768133330e55f00598fdbF"],
              overrides: {
                gasLimit: 1000000,
                value: utils.parseEther("0.1"),
              },
            })
          }
          onSuccess={() => {
            alert("결제가 완료되었습니다!");
          }}
          >결제</Web3Button>
      </div>
    </div>
  )
}