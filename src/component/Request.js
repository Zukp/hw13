import { useEffect, useState } from "react"
import styles from './Request.module.css'

function Request() {

    const [arr,setArray] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then((result) => {
        return result.json()
    }).then((data)=> {
       setArray(data)
    })
    
  },[])


  return <div className={styles.cont}>
     {
        arr.map((el) => {
          return  <div key={el.id} className={styles.done}>
              <p className={styles.p}>{el.id}</p>
              <p>{el.title}</p>
              <img  src={el.thumbnailUrl}  />
                 </div>
        })
     }
  </div>
} 
export default Request