import React, { useEffect, useState } from 'react'


const Feed  = () => {
  const [post,setpost]= useState([])
useEffect(()=>{
    try{
      fetch('http://localhost:3000/posts').
      then((response)=>response.json()).
      then((response=>setpost(response))).
      catch((error)=>console.log(error))


    } 
    catch(error){
      console.log(error)
    }
  },[])
 
  

  return (
    < >
   
   <div className='d-flex justify-content-center' >
  
   
    <div>{post.length>0 ? 
    (<>
      {post.map((post)=>(
        <div className='my-3' key={post.id}>
        <div className='d-flex'>
          <img className="dp rounded-circle" src={post.profile_pic } alt="dp" />
          <p className='username'>{post.username}</p>
        </div>
        <img className='post' src={post.image_url} alt="post"/>
        <div>
          
          <h5 className="font-style"><i className=" likes bi bi-heart">{post.likes_count} </i>
          <i className=" comment bi bi-chat"> </i>
          <i className="bi bi-send"> </i> </h5>
          <p>{post.caption}</p>
        </div>
        </div>

      ))}
    </> )
    : 
     <div>
      <div className="spinner-border d-flex justify-content-center" role="status">
  <span className="sr-only"></span>
      </div>
    </div>
     }

      </div>
   
  </div>
    </>
  )
}

export default Feed 