import MainNav from '../../components/MainNav'
import EmailsNav from '../../components/EmailsNav'
import styles from './style.module.css'
import {Outlet} from 'react-router-dom'

export default function MainLayout() {
  return (
    <section className={styles.mainLayout}>
      <MainNav />
      <EmailsNav />
      <Outlet />
    </section>
  )
}
