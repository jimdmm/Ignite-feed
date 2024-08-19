import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar.js';
import { Comment } from './Comment.js';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Post.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  id: string;
  type: 'paragraph' | 'link';
  content: string;
}

export interface IPost {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: IPost
}

export const Post = ({ post }: PostProps) => {
  const [comments, setComments] = useState(Array<string>);
  const [newCommentValue, setNewCommentValue] = useState('');

  const publishedDateFormatted = 
  format(
    post.publishedAt, 
    "d 'de' LLLL 'às' HH:mm" , 
    { locale: ptBR }
  )

  const publishedDateRelativeToNow =
  formatDistanceToNow(
    post.publishedAt,
    { 
      locale: ptBR,
      addSuffix: true
    }
  )

  function handleCreateNewComment(event: FormEvent): void {
    event.preventDefault()
        
    setComments([...comments, newCommentValue]);
    setNewCommentValue('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    event.target.setCustomValidity('')
    setNewCommentValue(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>): void {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string): void {
    const commentWithoutDeletedOne = 
    comments.filter(comment => {
      return comment !== commentToDelete;
    })
    
    setComments(commentWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentValue.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>
              {post.author.name}
            </strong>
            <span>
              {post.author.role}
            </span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
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
          onInvalid={handleNewCommentInvalid}
          required
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
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
