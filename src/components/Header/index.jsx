import styles from "./index.module.css"

export function Header() {
    return(
        <header className={styles.header}>
            <img src="/ignite-simbol.svg" alt="Logo" />
            <p>Feed</p>
        </header>
    )
}