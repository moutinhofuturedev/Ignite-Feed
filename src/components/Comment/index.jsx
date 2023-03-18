import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./index.module.css"

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/Devmoutinho.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Moutinho</strong>
                            <time title="13 de Março às 08:52" dateTime="2023-03-13 08:52:30">Cerca de 1H atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Paulo, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}