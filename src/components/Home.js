import React from 'react'
import Questions from './Questions'

function Home() {
  return (
    <div className='container'>
        <div className='container-title' >Questions and Answers about Login</div>
        <div className='container-questions'>
            <Questions/>
        </div>
        

    </div>
  )
}

export default Home