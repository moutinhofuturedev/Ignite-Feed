import styles from "./index.module.css"
import data from "../../../data.json"
import { PencilLine } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={data.cover} />

      <div className={styles.profile}>
        <img src={data.avatar} />

        <strong>{data.name}</strong>
        <span>{data.jobTitle}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editer seu perfil
        </a>
      </footer>
    </aside>
  );
}