import { Post } from "./Post"
import { Header } from "./components/Header"

function App() {
  return(
    <div>
      <Header />
      <Post author="Paulo" content="Lorem ipsum dolor sit amet, consectetur adip"/>
      <Post author="John" content="Lorem ipsum dolor"/>
      <Post author="Nicolas" content="lorem Ipsum dolor"/>
    </div>
  )
}

export default App
