import styles from '../styles/Home.module.css';
import { useContractRead , useContract} from '@thirdweb-dev/react';
import { contract } from 'web3/lib/commonjs/eth.exports';
import { CONTRACT_ADDRESS } from '../const/addresses';

export default function Main() {
  // const { contract } = useContract(CONTRACT_ADDRESS);
  // let def = [0,1,2];
  // def.map((b)=>{
  //   const {data:seller}
  //   = useContractRead(contract, "getSellerConditionArray",[b])
  //   const BuyerArray = JSON.stringify(seller);
  //   console.log(BuyerArray);
  // });

  return (
    <main style={{
      width: "100%",
      height: "800px",
      alignContent: "center",
      alignItems: "center",
      paddingTop: "14%"
    }}>
      <section>
        <div className={styles.body}>
          <span className={styles.gradientText0}>
                Smart Log Trading
          </span>
          <p className={styles.description}>
            스마트 컨트랙트를 활용하여<br/> 간편하게 원목을 거래하세요</p>
        </div>
      </section>
    </main>
  )
}
