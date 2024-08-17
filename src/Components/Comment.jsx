import { Avatar } from './Avatar.jsx';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react'

export const Comment = ({content, onDeleteComment}) => {
  function handleDeleteComment(event) {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={ false } src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?size=500&ext=jpg" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>User12367</strong>
              <time title="09 de agosto ás 09:15" dateTime="2024-08-09 09:15:23">Comentado há 1h</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
