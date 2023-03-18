import styles from "./index.module.css"
import data from "../../../data.json"
import { Comment } from "../Comment";

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src={data.avatar} />
            <div className={styles.authorInfo}>
              <strong>{data.name}</strong>
              <span>{data.jobTitle}</span>
            </div>
          </div>
          <time title="13 de Março às 08:52" dateTime="2023-03-13 08:52:30">
            Publicado há 1H
          </time>
        </header>
        <div className={styles.content}>
          <p>
            <p>Fala galeraa 👋</p>

            <p>
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz no NLW Return, evento da Rocketseat. O nome do projeto é
              DoctorCare 🚀
            </p>

            <p>
              👉 <a href="">jane.design/doctorcare</a>
            </p>

            <p>
              <a href="">#novoprojeto #nlw #rocketseat </a>
            </p>
          </p>
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