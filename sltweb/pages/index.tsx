import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Main from './main';
import AddInfo from "./checkOradd/addinfo";
import { useEffect } from "react";
import axios from "axios";

const Home: NextPage = () => {
  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/geocoding").then((response)=> {
  //     console.log(response);
  //   });
  //   axios.get("http://localhost:3000/api/direction").then((response)=> {
  //     console.log(response);
  //   });
  // });
  return (
    <main>
      <header>
      </header>
      <Main />
      <button>
      </button>
    </main>
  );
};

export default Home;
