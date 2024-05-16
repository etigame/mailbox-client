import EmailsList from '../../components/EmailsList'
import {Outlet} from 'react-router-dom'
import styles from './style.module.css'

export default function EmailsListLayout() {
  return (
    <section className={styles.emailsListLayout}>
      <EmailsList />
      <Outlet />
    </section>
  )
}
