import styles from './style.module.css'
import {useState} from 'react'

export default function MsgLi() {
  const [msg, setMsg] = useState({
    fullName: 'John Doe',
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    message:
      'Dear Moshe,Thank you for reaching out to inquire about the availability of our products. We are pleased to inform you that the item you are interested in is currently in stock and ready for purchase. You can place your order directly through our website https://practicum.workin.co.il  to make a purchase in person.Thank you for considering our products. Best regards, Aviad Derli, Customer Service Team',
    timestamp: 1715119039181,
    isFavorite: false,
    isRead: true,
  })

  return (
  <section className={styles.msgLi}>
    
  </section>)
}
