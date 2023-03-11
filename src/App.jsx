import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from "./styles/App.module.css"

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Paulo"
            content="Lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post author="John" content="Lorem ipsum dolor" />
          <Post author="Nicolas" content="lorem Ipsum dolor" />
        </main>
      </div>
    </div>
  );
}

export default App;
