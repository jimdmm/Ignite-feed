import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';
import styles from './Post.module.css';

export const Post = ({author}) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/94024972?v=4"/>
          <div className={styles.authorInfo}>
            <strong>
              {author}
            </strong>
            <span>
              Web Developer
            </span>
          </div>
        </div>

        <time title="09 de agosto ás 09:15" dateTime="2024-08-09 09:15:23">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>jane.design/doctorcare</p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
