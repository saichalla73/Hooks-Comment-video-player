import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')

  const onChangeName = event => setName(event.target.value)
  console.log(name)

  const [comment, setComment] = useState('')
  const onChangeComment = event => setComment(event.target.value)
  console.log(comment)

  const [commentsList, setCommentsList] = useState([])

  const onAddComment = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setComment('')
    setName('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={comment}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
