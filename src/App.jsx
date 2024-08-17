import { Header } from "./Components/Header.jsx"
import { Post } from "./Components/Post.jsx"
import { Sidebar } from "./Components/Sidebar.jsx";

import styles from './App.module.css';
import './global.css'

function App() {

  const posts = [
    {
      id: 1,
      author: { 
        imgUrl: 'https://avatars.githubusercontent.com/u/94024972?v=4', 
        name: 'Jim Douglas', 
        role: 'Backend Developer'
      },
      content: [
        {id:'101', type: 'paragraph', content:'Fala galeraa 👋'},
        {id:'102', type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {id:'103', type: 'link', content:'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2024-08-16 23:40:21'),
    }
  ];

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
           )
          })}
        </main>
      </div>
    </>
  )
}

export default App
