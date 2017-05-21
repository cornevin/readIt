import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ onSubmit }) => {
  let email
  let password

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!email.value.trim() || !password.value.trim()) {
          return
        }
        onSubmit(email.value, password.value)
        email = ''
        password = ''
      }}>

        Email : 
        <input ref={node => {
          email = node
        }} />
        Password :
        <input ref={node => {
          password = node
        }}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo