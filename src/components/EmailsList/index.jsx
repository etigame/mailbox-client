import InputSearch from './InputSearch'
import styles from './style.module.css'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'
import EmailLi from './EmailLi'

export default function EmailsList() {
  const { emails } = useContext(DataContext)

  return (
    <section className={styles.emailsList}>
      <section className={styles.top}>
        <InputSearch />
      </section>
      <section className={styles.emailsContainer}>
        {emails.map((email) => (
          <EmailLi key={email.timestamp} email={email} />
        ))}
      </section>
    </section>
  )
}
