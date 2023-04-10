import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./index.module.css"
import { Avatar } from "../Avatar"

export function Comment({ content, onDeleteComment }) {
    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar src="https://github.com/Devmoutinho.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Paulo Moutinho</strong>
                            <time title="13 de Março às 08:52" dateTime="2023-03-13 08:52:30">Cerca de 1H atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
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