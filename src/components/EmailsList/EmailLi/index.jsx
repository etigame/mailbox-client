import styles from './style.module.css'
import { IoMdMail } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

export default function EmailLi({email}) {
    const {fullName, imageUrl, message, timestamp, isFavorite, isRead} = email

    const formatTime = () => {
        const now = new Date().getTime()
        if (now - 24*60*60 < timestamp) return `${String(new Date(timestamp).getHours()).padStart(2, '0')}:${String(new Date(timestamp).getMinutes()).padStart(2, '0')}`

        else return `${String(new Date(timestamp).getDate()).padStart(2, '0')}.${String(new Date(timestamp).getMonth() + 1).padStart(2, '0')}`
    }

    return (
        <NavLink className={styles.emailLi}>
            <img src={imageUrl} alt="user-img" />
            <div className={styles.content}>
                <span className={styles.fullName}>{fullName}</span>
                <span className={styles.message}>{message}</span>
            </div>
            <div className={styles.details}>
                <span className={styles.time}>{formatTime()}</span>
                {!isRead ? <IoMdMail className={styles.unread}/>: <FaStar className={styles[isFavorite ? 'favorite' : '']}/>}
            </div>
        </NavLink>
    )
}