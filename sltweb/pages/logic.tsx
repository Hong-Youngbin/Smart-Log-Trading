import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";
import { contract } from "web3/lib/commonjs/eth.exports";
import _ from "lodash";

export default function Logic() {
  const { contract } = useContract(CONTRACT_ADDRESS);
  let abc = [0,1,2,3,4];
  abc.map((a)=>{
    const {data:seller}
    = useContractRead(contract, "getSellerConditionArray",[a])
    const SellerArray = [];
    const other = _.concat(JSON.stringify(seller));
  });
  let def = [0,1,2];
  def.map((b)=>{
    const {data:seller}
    = useContractRead(contract, "getSellerConditionArray",[b])
    const BuyerArray = JSON.stringify(seller);
    console.log(BuyerArray);
  });
  


}





