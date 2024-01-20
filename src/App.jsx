import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector,useDispatch}  from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "./state/index";

function App() {
  const account = useSelector((state)=> state.account);
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <>
     <h1 >{account}</h1>
     <button onClick={()=>depositMoney(1000)}>Deposit</button>
     <button onClick={()=> withdrawMoney(200)}>Withdraw</button>
    </>
  )
}

export default App
