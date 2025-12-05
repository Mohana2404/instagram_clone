import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'

const Suggestions = () => {
    const[profile,setprofile]=useState(null);
    const[suggest,setsuggest]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/profile').
        then((response)=>response.json()).
        then((response) => setprofile(response)).
        catch((error)=>console.log(error))

        fetch('http://localhost:3000/suggestions').
        then((response)=>response.json()).
        then(response => setsuggest(response)).
        catch((error)=>console.log(error))
        
        
    },[]);
    
   const handlefollow=async(id,username,profile_pic)=>{
      axios.post("http://localhost:3000/followers",{"id":id,"username":username,"profile_pic":profile_pic}).
      then(alert("followed")).
      catch((error)=>console.log(error))
    }

  return (
    <div >
        {profile ?
        <div className=' justify-content-center my-3'>
        <div className='d-flex'>  
          <img className="dp rounded-circle " src={profile.profile_pic } alt="dp" />
          <p  className='username'>{profile.username}</p>
          <small className='ms-auto text-primary m-2'> switch</small>
        </div>
        </div>
     
    :<div>loading...</div> } 
    <div className='d-flex justify-content-between m-3'>
        <p>Suggested for you</p>
        <p>See all</p>
    </div>
    <div>{suggest.length>0 ? 
    <div>
      {suggest.map((suggest)=>(
        <div className='my-3 ' key={suggest.id}>
        <div className='d-flex'>
          <img className="dp rounded-circle" src={suggest.profile_pic } alt="dp" />
          <p className='username'>{suggest.username}</p>
            <button className='ms-auto btn btn-primary m-1' onClick={()=>{handlefollow(suggest.id,suggest.username,suggest.profile_pic)}}> follow</button>
        </div>
        </div>
        ))}     
    </div>
    : 
      <div>
      <div className=" d-flex justify-content-center spinner-border" role="status">
      
      </div>
    </div>
    
    }  
  </div> 
  </div> 
  )
}

export default Suggestions