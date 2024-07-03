import React from 'react'
import { Link } from 'react-router-dom';

const BoardPage = () => {
  return (
    <>
    <div>
        <h1>Board Page</h1>
        <Link to="/">
            <button>Back</button>
        </Link>
    </div>
    
    </>
  )
}

export default BoardPage