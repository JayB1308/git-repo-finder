import React from 'react'
import "./RepoBar.css"
const RepoBar = ({followers,following,no_repo}) => {
  return (
    <div className='repo-bar'>
    <p>Followers <span className='bar-number'>{followers}</span></p>
    <p>Following <span className='bar-number'>{following}</span></p>
    <p>No.of Repositories <span className='bar-number'>{no_repo}</span></p>
    </div>
  )
}

export default RepoBar