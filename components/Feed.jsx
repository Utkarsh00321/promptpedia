'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data,handleTagClick})=>{
  if(data.length==0){
    return (<h1 className='pt-20 text-white font-satoshi font-bold text-4xl'>Sorry, no prompt found!</h1>)
  }
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );

};

function Feed(){
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const [posts, setPosts] = useState([]);


  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e)=>{
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  useEffect(() => {
    const fetchPosts = async()=>{
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, [])
  
  return (
   <section className='feed'>
    <form className='relative w-full flex-center'>
      <input
      type='text'
      placeholder='Search for tag or username'
      value={searchText}
      onChange={handleSearchChange}
      required
      className='search_input peer'
      />
    </form>
    {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
   </section>
  )
}

export default Feed