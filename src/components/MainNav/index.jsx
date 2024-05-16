import styles from './style.module.css'
import { Link, NavLink } from 'react-router-dom'
import { FaRegClock, FaRegEye } from 'react-icons/fa'
import { BiTask } from 'react-icons/bi'
import { ImUsers } from 'react-icons/im'
import { MdBarChart } from 'react-icons/md'
import { FaVideo } from 'react-icons/fa'

export default function MainNav() {
  const links = [
    { title: 'scheduled tasks', icon: <FaRegClock />, href: 'scheduled', isActive: false },
    { title: 'tasks', icon: <BiTask />, href: 'tasks', isActive: false },
    { title: 'inspect', icon: <FaRegEye />, href: 'inspect', isActive: false },
    { title: 'emails', icon: <ImUsers />, href: 'emails', isActive: true },
    { title: 'statistics', icon: <MdBarChart />, href: 'statistics', isActive: false },
    { title: 'live chats', icon: <FaVideo />, href: 'live', isActive: false },
  ]

  return (
    <section className={styles.mainNav}>
      <Link>
        <img className={styles.logo} src="/logo-mail-box.png" alt="logo" />
      </Link>
      <section className={styles.navLinks}>
        {links.map((link) => (
          <MainNavLink
            title={link.title}
            to={link.href}
            icon={link.icon}
            key={link.title}
            isActive={link.isActive}
          />
        ))}
      </section>
      <Link>
        <img className={styles.userImg} src="/woman.webp" alt="user-img" />
      </Link>
    </section>
  )
}

function MainNavLink({ title, href, icon, isActive }) {
  return (
    <NavLink to={href} title={title} className={isActive ? styles.active : ''}>
      <div>{icon}</div>
    </NavLink>
  )
}
