import { Header } from "./Components/Header.jsx"
import { Post } from "./Components/Post.jsx"
import { Sidebar } from "./Components/Sidebar.jsx";

import styles from './App.module.css';
import './global.css'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="jim Douglas"/>
        </main>
      </div>
    </>
  )
}

export default App
