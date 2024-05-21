import React from "react";
import * as web3 from "@solana/web3.js";

const Connection = async () => {
  console.log("hello");
  const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  console.log("connected ✅");
  const address = new web3.PublicKey("53UFQKXZrogofVKysnu1VwxhYmvtiZm4qzR1Kfhrd6CG");
  const balance = await connection.getBalance(address);
  const balanceInSol = balance / web3.LAMPORTS_PER_SOL;
  console.log(`The balance of the account ${address} is : ${balanceInSol} SOL`);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Connection;
