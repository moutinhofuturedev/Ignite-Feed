import styles from "./index.module.css"
import { PencilLine } from "phosphor-react"
import { Avatar } from "../Avatar";
import data from "../../../data.json"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={data.cover} />

      <div className={styles.profile}>
        <Avatar src={data.avatar}/>

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