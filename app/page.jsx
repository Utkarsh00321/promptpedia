import React from 'react'
import Feed from '@components/Feed'

function Home() {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center text-white'>Discover & Share 
        <br className='max-md:hidden'/>
        <span className='blue_gradient'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
        Dive into AI Wonderland! Explore, create, and share mind-bending prompts. Your gateway to a universe of limitless imagination awaits. Join the AI revolution in seconds! 
        </p>
        <Feed/>

    </section>
  )
}

export default Home