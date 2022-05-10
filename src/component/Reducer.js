import {useState,useEffect,useRef } from 'react'
import styles from './Reducer.module.css';

function Reducer() {
const [done,setDone] = useState(false)
const refDiv = useRef(null)

useEffect(() => {
  
    setTimeout(()=> {
        setDone(!done)
    },1000)

  
},[done])  
  return <div ref={refDiv}  className={!done ? styles.red : styles.green}></div>
}
export default Reducer