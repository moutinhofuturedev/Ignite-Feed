import styles from "./index.module.css"
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [ comments, setComments ] = useState([1, 2])

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, comments.length + 1])
  }
  
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time title="13 de Março às 08:52" dateTime="2023-03-13 08:52:30">
            {publishedAt}
          </time>
        </header>
        <div className={styles.content}>
          {content.map((line, index) => {
            return line.type === "paragraph" ? (
              <p key={index}>{line.content}</p>
            ) : (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>
          <textarea placeholder="Deixe um comentário"></textarea>
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment, index) => {
            return <Comment key={index}/>
          })}
        </div>
      </article>
    </>
  );
}