import styles from './style.module.css'
import { Link, NavLink } from 'react-router-dom'
import { FaRegClock, FaRegEye } from 'react-icons/fa'
import { BiTask } from "react-icons/bi";
import { ImUsers } from "react-icons/im";
import { MdBarChart } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

export default function MainNav() {
  const links = [{ title: 'scheduled tasks', icon: <FaRegClock />, href: '#' },
  { title: 'tasks', icon: <BiTask />, href: '#' },
  { title: 'eye', icon: <FaRegEye />
  , href: '#' },
  { title: 'users', icon: <ImUsers />
  , href: '#' },
  { title: 'graphs', icon: <MdBarChart />
  , href: '#' },
  { title: 'video', icon: <FaVideo />
  , href: '#' }]

  return (
    <section className={styles.mainNav}>
      <Link>
        <img className={styles.logo} src="logo-mail-box.png" alt="logo" />
      </Link>
      <section className={styles.navLinks}>
        {links.map((link) => (
          <MainNavLink
            title={link.title}
            to={link.href}
            icon={link.icon}
            key={link.title}
          />
        ))}
      </section>
      <Link>
        <img className={styles.userImg} src="woman.webp" alt="user-img" />
      </Link>
    </section>
  )
}

function MainNavLink({ title, href, icon }) {
  return (
    <NavLink to={href} title={title}>
        <div>{icon}</div>
    </NavLink>
   
  )
}
