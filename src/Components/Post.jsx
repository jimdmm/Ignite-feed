import { format, formatDistance, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar.jsx';
import { Comment } from './Comment.jsx';
import styles from './Post.module.css';
import { useState } from 'react';

export const Post = ({author, publishedAt, content}) => {
  const [comments, setComments] = useState([]);
  const [newCommentValue, setNewCommentValue] = useState('');

  const publishedDateFormatted = 
  format(
    publishedAt, 
    "d 'de' LLLL 'às' HH:mm" , 
    { locale: ptBR }
  )

  const publishedDateRelativeToNow =
  formatDistanceToNow(
    publishedAt,
    { 
      locale: ptBR,
      addSuffix: true
    }
  )

  function handleCreateNewComment(event) {
    event.preventDefault()
        
    setComments([...comments, newCommentValue])
    setNewCommentValue('')
  }

  function handleNewCommentChange(event) {
    setNewCommentValue(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeletedOne = 
    comments.filter(comment => {
      return comment !== commentToDelete;
    })
    
    setComments(commentWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.imgUrl}/>
          <div className={styles.authorInfo}>
            <strong>
              {author.name}
            </strong>
            <span>
              {author.role}
            </span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.id}>{line.content}</p>
          } else if (line.type == 'link') {
            return <p key={line.id}><a href="#">{line.content}</a></p> 
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          name='comment'
          value={newCommentValue}
          onChange={handleNewCommentChange}
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
