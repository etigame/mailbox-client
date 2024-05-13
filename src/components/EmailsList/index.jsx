import InputSearch from './InputSearch'
import styles from './style.module.css'
import { useState, useContext, useEffect } from 'react'
import DataContext from '../../context/DataContext'
import EmailLi from './EmailLi'

export default function EmailsList() {
  const { emails } = useContext(DataContext)
  const [userChats, setUserChats] = useState([])

  useEffect(() => {
    fetch('https://mailbox-server.onrender.com/chat/inbox', {method: 'GET'}).then(res => res.json()).then(data => setUserChats(data))
  }, [])


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
