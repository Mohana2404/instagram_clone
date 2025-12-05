import React from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'

const ViewStories = () => {
    const {story_id,total_stories}=useParams();
    const [story,setstory]=useState();
    const navigate=  useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:3000/stories/${story_id}`).
        then((response)=>response.json()).
        then((response)=>setstory(response)).
        catch((error)=>console.log(error))

       
    },[story_id]);
    console.log(story);

    if(Number(story_id)>total_stories || Number(story_id)<=0){
      navigate('/');
    }

    
  return (
    <div>{story ? 
      <div className='d-flex justify-content-center align-items-center '>
        <Link to={`http://localhost:5173/stories/${Number(story_id)-1}/${(total_stories)}`}><h2><i className="bi bi-arrow-left-circle-fill mx-5"></i></h2></Link>
        
        <img className='vh-100' src={story.media_url} alt="story"/>
        <Link to={`http://localhost:5173/stories/${Number(story_id)+1}/${(total_stories)}`} ><h2><i className="bi bi-arrow-right-circle-fill mx-5"></i></h2></Link>
      </div>
        :
        <p>loading</p>
    }</div>
  )
}

export default ViewStories