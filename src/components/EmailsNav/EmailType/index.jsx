import {NavLink} from 'react-router-dom'
import styles from './style.module.css'
import Badge from '../../Badge'

export default function EmailType({icon, title, href, numOfEmails}) {
    return (
        <NavLink className={({isActive})=>`${styles.emailType} ${isActive ? styles.active : ''}`} to={href}>
            {icon}
            <span>{title}</span>
            {numOfEmails > 0 ? <Badge numOfEmails={numOfEmails}/> : ''}
        </NavLink>
    )
}