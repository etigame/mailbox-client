import styles from './style.module.css'
import { BsFillSendFill } from 'react-icons/bs'

export default function SendBtn() {
    return (
        <button className={styles.sendBtn}>
            <span>Send</span>
            <BsFillSendFill />
        </button>
    )
}