import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../designs/design.module.css'
import logo from '../imgs/Group 22.svg'
import logoDark  from '../imgs/Group 69.svg'
export const Header = () => {
  const [thing,setThing] = useState(false)
  const changeState = ()=>{
    const location = window.location.pathname
    setThing(location !== '/')
  }
  useEffect(()=>{
    changeState()
  },[thing])
  return (
    <>
      <div className={styles.header}>
        <Link to="/" onClick={changeState}>
          <img src={!thing ? logo : logoDark} />
        </Link>
        <div className={styles.header2}>
          <Link to="/blog" onClick={changeState}>
            <h2 className={!thing ? styles.headerText : styles.headerText2}>Blog</h2>
          </Link>
          <Link to="/post" onClick={changeState}>
            <h2 className={styles.headerText}>Post</h2>
          </Link>
          <Link to="/contact" onClick={changeState}>
            <h2 className={styles.headerText}>Contact</h2>
          </Link>
          <h2 className={styles.headerTextBorder}>Get access</h2>
        </div>
      </div>
    </>
  )
}
