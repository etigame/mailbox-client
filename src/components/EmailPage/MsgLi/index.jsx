import styles from './style.module.css'
import { useState } from 'react'

export default function MsgLi({ userChat, singleMsg }) {
  const { members } = userChat.chat
  const { from, content, date } = singleMsg
  const [isMsgOpen, setIsMsgOpen] = useState(false)

  const sender = members.find((member) => member._id === from)
  const { avatar, fullName } = sender

  const formatDate = () => {
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }

    if (isMsgOpen) options.weekday = 'long'

    const formattedDate = new Date(date).toLocaleDateString('en-US', options)

    return formattedDate
  }

  if (isMsgOpen === true)
    return (
      <section
        className={styles.msgLiOpen}
        onClick={() => setIsMsgOpen(!isMsgOpen)}
      >
        <div className={styles.msgDetails}>
          <div className={styles.senderDetails}>
            <img src={avatar} alt="member-image" />
            <h3>{fullName}</h3>
          </div>
          <p className={styles.date}>{formatDate()}</p>
        </div>
        <p>{content}</p>
      </section>
    )

  if (isMsgOpen === false)
    return (
      <section
        className={styles.msgLiClose}
        onClick={() => setIsMsgOpen(!isMsgOpen)}
      >
        <section className={styles.left}>
          <div className={styles.senderDetails}>
            <img src={avatar} alt="member-image" />
            <h3>{fullName}</h3>
          </div>
          <p className={styles.content}>{content}</p>
        </section>
        <p className={styles.date}>{formatDate()}</p>
      </section>
    )
}
