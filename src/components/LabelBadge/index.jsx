import styles from './style.module.css'

export default function LabelBadge() {
    return (
        <div className={styles.labelBadge}>
            <span>Promising offers</span>
            <button>x</button>
        </div>
    )
}