import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Stories = () => {
  const[stories,setstories]=useState([]);
  const navigate=  useNavigate();
  const total_stories=stories.length;
  useEffect(()=>{
    fetch("http://localhost:3000/stories").
    then((response)=>response.json()).
    then((response)=>setstories(response)).
    catch((error)=>console.log(error))
  },[])


  return (
    <div className='stories '>
      {stories.length>0 ? (
        <div className='d-flex  '>
        {stories.map((story)=>( 
          <div key={story.id} className='mx-3' onClick={()=>{navigate(`/stories/${Number(story.id)}/${Number(total_stories)}`)}}>
            <div className="gradientCircle ">
            <img className='innerCircle storyDp rounded-circle ' src={story.profile_pic} alt="story"/>
            </div>
            <p className='text-truncate' style={{width:"50px"}} >{story.username}</p>
          </div>

        ))}
        </div>):(
          <div className="spinner-border d-flex justify-content-center" role="status">
           <span className="sr-only"></span>
          </div>
        )
        }


    </div>
  )
}

export default Stories