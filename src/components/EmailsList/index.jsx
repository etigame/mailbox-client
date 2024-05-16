import InputSearch from './InputSearch'
import styles from './style.module.css'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import EmailLi from './EmailLi'

export default function EmailsList() {
  const [userChats, setUserChats] = useState([])
  let { emailsFilter } = useParams()

  useEffect(() => {
    fetch(`https://mailbox-server.onrender.com/chat/${emailsFilter}`, {method: 'GET'}).then(res => res.json()).then(data => setUserChats(data))
  }, [emailsFilter])


  return (
    <section className={styles.emailsList}>
      <section className={styles.top}>
        <InputSearch />
      </section>
      <section className={styles.emailsContainer}>
        {userChats.map((userChat) => (
          <EmailLi key={userChat._id} userChat={userChat} />
        ))}
      </section>
    </section>
  )
}
