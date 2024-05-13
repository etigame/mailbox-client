import styles from './style.module.css'
import LabelBadge from '../LabelBadge'
import { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/DataContext'
import { FaStar } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'
import { IoMdPrint } from 'react-icons/io'
import EmailTitle from './EmailTitle'
import MsgLi from './MsgLi'
import SendBtn from './SendBtn'
import { IoMdMore } from 'react-icons/io'
import { IoColorFill } from 'react-icons/io5'
import { FaUnderline } from 'react-icons/fa'
import { PiTextItalicBold } from 'react-icons/pi'
import { FaBold } from 'react-icons/fa6'
import { FaAlignLeft } from 'react-icons/fa'
import { FaAlignCenter } from 'react-icons/fa'
import { FaAlignRight } from 'react-icons/fa'
import { FaAlignJustify } from 'react-icons/fa'
import { GrOrderedList } from 'react-icons/gr'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { ImAttachment } from 'react-icons/im'
import { FaImage } from 'react-icons/fa6'

export default function EmailPage() {
  const [userChat, setUserChat] = useState({})

  useEffect(() => {
    fetch('https://mailbox-server.onrender.com/chat/inbox', {method: 'GET'}).then(res => res.json()).then(data => setUserChat(data[2]))
  }, [])

  if (userChat._id) return (
    <section className={styles.emailPage}>
      <section className={styles.top}>
        <LabelBadge />
        <div className={styles.actions}>
          <FaStar />
          <IoMdPrint />
          <FaTrashCan />
          <IoMdMore />
        </div>
      </section>
      <section className={styles.emailContainer}>
        <EmailTitle subject={userChat.chat.subject} lastDate={userChat.chat.lastDate}/>
        {userChat.chat.msg.map(singleMsg => <MsgLi key={singleMsg._id} userChat={userChat} singleMsg={singleMsg} />)}
      </section>
      <section className={styles.editContainer}>
        <section className={styles.textEditor}>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="4"
            placeholder="Write your message..."
          />
          <section className={styles.actions}>
            <div className={styles.styleText}>
              <FaBold />
              <PiTextItalicBold />
              <FaUnderline />
              <IoColorFill />
            </div>
            <div className={styles.styleParagraph}>
              <GrOrderedList />
              <AiOutlineUnorderedList />
              <FaAlignLeft />
              <FaAlignCenter />
              <FaAlignRight />
              <FaAlignJustify />
            </div>
          </section>
        </section>
        <section className={styles.editContainerActions}>
          <section>
            <div className={styles.leftActions}>
              <ImAttachment />
              <FaImage />
            </div>
            <div className={styles.rightActions}>
              <FaTrashCan />
              <IoMdMore />
            </div>
          </section>
          <SendBtn />
        </section>
      </section>
    </section>
  )
}
