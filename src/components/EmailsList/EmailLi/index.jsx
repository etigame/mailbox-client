import styles from './style.module.css'
import { IoMdMail } from 'react-icons/io'
import { FaStar } from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

export default function EmailLi({userChat}) {
    const {isRead, chat} = userChat
    const {subject, msg, members, lastDate, _id} = chat

    const formatTime = () => {
        const lastMsgTimestamp = new Date(`${lastDate}`).getTime()

        if (Date.now() - 24*60*60*1000 < lastMsgTimestamp) return `${String(new Date(lastMsgTimestamp).getHours()).padStart(2, '0')}:${String(new Date(lastMsgTimestamp).getMinutes()).padStart(2, '0')}`

        else return `${String(new Date(lastMsgTimestamp).getDate()).padStart(2, '0')}.${String(new Date(lastMsgTimestamp).getMonth() + 1).padStart(2, '0')}`
    }

    const formatMembers = () => `${members[0].fullName}, ${members[1].fullName.split(' ')[0]}${members[2]? `, +${members.length - 2}` : ''}`
        

    return (
        <NavLink className={styles.emailLi} to={_id}>
            <img src={members[0].avatar} alt="user-img" />
            <div className={styles.content}>
                <span className={styles.fullName}>{formatMembers()}</span>
                <span className={styles.message}>{msg.find(msg => msg.date === lastDate).content}</span>
            </div>
            <div className={styles.details}>
                <span className={styles.time}>{formatTime()}</span>
                {!isRead ? <IoMdMail className={styles.unread}/>: <FaStar className={styles[isFavorite ? 'favorite' : '']}/>}
            </div>
        </NavLink>
    )
}