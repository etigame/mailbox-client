import styles from './style.module.css'
import { Link, NavLink } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import NewMsgBtn from './NewMsgBtn'
import EmailType from './EmailType'
import { HiMiniInboxArrowDown } from 'react-icons/hi2'
import { BsFillSendFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { RiPencilFill } from 'react-icons/ri'
import { FaTrashCan } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosAdd } from 'react-icons/io'
import { IoMdMore } from 'react-icons/io'
import { MdLabel } from 'react-icons/md'

export default function EmailsNav() {
  const emailTypes = [
    {
      title: 'Inbox',
      icon: <HiMiniInboxArrowDown />,
      href: '#',
      numOfEmails: 1,
    },
    {
      title: 'Sent Emails',
      icon: <BsFillSendFill />,
      href: '#',
      numOfEmails: 0,
    },
    { title: 'Favorite', icon: <FaStar />, href: '#', numOfEmails: 0 },
    { title: 'Draft', icon: <RiPencilFill />, href: '#', numOfEmails: 0 },
    { title: 'Deleted', icon: <FaTrashCan />, href: '#', numOfEmails: 0 },
    { title: 'More', icon: <IoIosArrowDown />, href: '#', numOfEmails: 0 },
  ]

  const labels = [
    { title: 'Work', color: '#d0d3e3', href: '#' },
    { title: 'Promising offers', color: '#f2dea8', href: '#' },
    { title: 'Work in Progress', color: '#8edccf', href: '#' },
    { title: 'In acceptance', color: '#b2e9ff', href: '#' },
    { title: 'Read later', color: '#cdbfff', href: '#' },
  ]

  return (
    <section className={styles.emailsNav}>
      <div className={styles.mailboxHeader}>
        <Link>
          <div className={styles.back}>
            <IoChevronBack />
          </div>
        </Link>
        <h1>Mailbox</h1>
      </div>

      <NewMsgBtn />

      <section className={styles.navsWrapper}>
        <section className={styles.emailTypes}>
          {emailTypes.map((et) => (
            <EmailType
              title={et.title}
              icon={et.icon}
              href={et.href}
              numOfEmails={et.numOfEmails}
              key={et.title}
            />
          ))}
        </section>

        <section className={styles.labels}>
          <div className={styles.top}>
            <span>Labels</span>
            <button className={styles.addLabel}>
              <IoIosAdd />
            </button>
            <button className={styles.more}>
              <IoMdMore />
            </button>
          </div>
          {labels.map((label) => (
            <NavLink className={styles.label} to={label.href} key={label.title}>
              <MdLabel
                className={styles.labelBadge}
                style={{ color: `${label.color}` }}
              />
              <span>{label.title}</span>
            </NavLink>
          ))}
        </section>
      </section>
    </section>
  )
}
