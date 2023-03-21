import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import data from "../data.json"

import styles from "./styles/App.module.css"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {data.posts.map(post => {
            return(
              <Post
              author={post.author}
              content={post.content}
              published={post.published}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
