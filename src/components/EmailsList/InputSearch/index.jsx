import styles from './style.module.css'
import { IoSearch } from "react-icons/io5";

export default function InputSearch() {
    return (
        <div className={styles.searchContainer}>
          <input type="text" name="search" id="search" placeholder="Search" />
          <IoSearch className={styles.searchIcon}/>
        </div>
    )
}