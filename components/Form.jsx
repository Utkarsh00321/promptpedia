import React from 'react'
import Link from 'next/link'

function Form({type,post,setPost,submitting,handleSubmit}) {
  return (
    <section className='w-full max-w-full flex-start flex-col mb-10'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient1'>{type} Post</span>
         
      </h1>
      <p className='desc text-left max-w-md'>
          {type} & Share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p>

      <form 
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
      <label>
        <span className='font-satoshi font-semibold text-base text-slate-200'>
         Your AI prompt
        </span>
        <textarea
         className='form_textarea'
         value={post.prompt}
         onChange={(e)=>setPost({
          ...post,prompt:e.target.value
         })}
         placeholder='Write your prompt here ...'
         required
        />

       

      </label>
      <label>
        <span className='font-satoshi font-semibold text-base text-slate-200'>
         Tag{' '}
         <span>(#webdevelopment #dsa)</span>
        </span>
        <textarea
         className='form_input'
         value={post.tag}
         onChange={(e)=>setPost({
          ...post,tag:e.target.value
         })}
         placeholder='#tag ...'
         required
        />
      </label>
      <div className='flex-end mx-3 mb-5 gap-4'>
         <Link href='/' className='text-slate-200 text-sm'>Cancel</Link>
         <button type='submit'
         disabled = {submitting}
         className='px-5 py-1.5 text-sm bg-primary-blue rounded-full text-white'
         >
         {submitting? '${type}...':type}
         </button>
      </div>
      </form>


    </section>
  )
}

export default Form