import styles from "./index.module.css"
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

export function Post({ author, publishedAt, content }) {
  
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
            if (line.type === "paragraph") {
              return <p key={index}>{line.content}</p>;             
            } else if (line.type === "link") {
              return <p key={index}><a href="">{line.content}</a></p>;
            }
          })}
        </div>
        
        <form className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>
          <textarea placeholder="Deixe um comentário"></textarea>
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
        </div>
      </article>
    </>
  );
}