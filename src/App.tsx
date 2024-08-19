import { Header } from "./Components/Header.tsx"
import { Post, IPost } from "./Components/Post.tsx"
import { Sidebar } from "./Components/Sidebar.tsx";

import styles from './App.module.css';
import './global.css'

function App() {

  const posts: IPost[] = [
    {
      id: 1,
      author: { 
        name: 'Jim Douglas', 
        role: 'Backend Developer',
        avatarUrl: 'https://avatars.githubusercontent.com/u/94024972?v=4'
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

      <section className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
           )
          })}
        </main>
      </section>
    </>
  )
}

export default App
