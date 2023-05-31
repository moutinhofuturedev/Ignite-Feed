import styles from "./index.module.css"
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [ comments, setComments ] = useState([])
  const [ value, setValue ] = useState("")

  const handleCreateNewComment = (event) => {
    event.preventDefault()

    setComments([...comments, value])
    setValue("")
  }

  const handleNewCommentChange = (event) => {
    setValue(event.target.value)
  }

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeleteOne)
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
          {content.map((line) => {
            return line.type === "paragraph" ? (
              <p key={line.content}>{line.content}</p>
            ) : (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>
          <textarea data-cy="text" placeholder="Deixe um comentário" value={value} onChange={handleNewCommentChange}></textarea>
          <footer>
            <button data-cy="submit" type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
          })}
        </div>
      </article>
    </>
  );
}