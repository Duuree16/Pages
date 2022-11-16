import { Button } from 'react-bootstrap'
import styles from '../designs/design.module.css'

export const Head = () => {
  return (
    <div className={styles.home}>
      <div className={styles.display1}>
        <h2 className={styles.mainText}>Instant collaborations for remote teams</h2>
        <p className={styles.smallText}>
          All in one for your remote team chats, collaboration and track
          projects
        </p>
        <input className={styles.input}/>
      <Button variant='primary'>Get early access</Button>
      </div>
      <div className={styles.display2}></div>
      <div className={styles.display3}></div>
      <div className={styles.display4}></div>
      <div className={styles.display5}></div>
    </div>
  )
}
