import styles from './style.module.css'

export default function Badge({numOfEmails}) {
    return (
        <div className={styles.badge}>
            <span>{numOfEmails}</span>
        </div>
    )
}