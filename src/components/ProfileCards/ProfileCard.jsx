import React from 'react'
import './style.css'

function Welcome({ firstName, lastName, image }) {
  return (
    <div className="profile-card">
      {image ? <><img src={image} alt={`${firstName} ${lastName}`} className="profile-image" height={100} width={100} /><hr /></> : <p>No Image Available</p>}
      <div><strong>First Name:</strong> {firstName} </div>
      <div><strong>Last Name:</strong> {lastName}</div>
    </div>
  )
}

export default Welcome