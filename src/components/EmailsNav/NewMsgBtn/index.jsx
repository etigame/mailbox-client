import { Link } from 'react-router-dom'
import { IoMdMail } from 'react-icons/io'
import styles from './style.module.css'

export default function NewMsgBtn() {
  return (
    <Link className={styles.newMsgBtn}>
        <IoMdMail />
      <span>New message</span>
    </Link>
  )
}
