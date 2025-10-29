import React from 'react'
import './style.css'

function Welcome({ firstName, lastName }) {
  return (
    <div className="profile-card">
      <div><strong>First Name:</strong> {firstName} </div>
      <div><strong>Last Name:</strong> {lastName}</div>
    </div>
  )
}

export default Welcome