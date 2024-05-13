import styles from './style.module.css'

export default function EmailTitle({subject, lastDate}) {

    const formatDate = () => {
        const formattedDate = new Date(lastDate).toLocaleDateString('en-US', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'});

        return formattedDate        
    }

    return (
        <section className={styles.emailTitle}>
            <p>{formatDate()}</p>
            <h1>{subject}</h1>
        </section>
    )
}