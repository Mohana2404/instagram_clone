import React, { use } from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'

const Profile = () => {
    const [profile,setprofile]=useState(null);
    const [followers,setfollowers]=useState([]);
    const [unFollowed,setunFollowed]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/profile").
        then((data=>{setprofile(data.data)})).
        catch((error)=>console.log(error))

        axios.get("http://localhost:3000/followers").
        then((response => setfollowers(response.data))).
        catch((error)=>console.log(error))
    },[unFollowed])
   function handleOnChange(e){
        setprofile(prev=>({
             ...prev,
            [e.target.name]:e.target.value
    }))  
       
    }
    const handleUpdate = async()=>{
        axios.put("http://localhost:3000/profile",profile).
        then(alert("Profile Updated")).
        catch((error)=>console.log(error))

    }
    const handledelete=async(id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`).
        then(alert("follower removed")).
        then(setunFollowed(!unFollowed)).
        catch((error)=>console.log(error))
    }
    
  return (
    <div>{profile?
        <div className='d-flex flex-column justify-content-center align-items-center m-5'>
            <img className='rounded-circle profile-pic' src={profile.profile_pic} alt="profile"/>
            <h5>{profile.username}</h5>
            <input type="text"
                    value={profile.username}
                    name="username"
                    className='form-Control my-4'
                    onChange={handleOnChange}>
                    </input>
             <input type="text"
                    value={profile.profile_pic}
                    name="profile_pic"
                    className='form-Control my-4'
                    onChange={handleOnChange}>
                    </input>  
                    
            <button className='btn btn-primary'onClick={handleUpdate}>
                 Update Profile</button>              
        </div>:
        <div className="spinner-border d-flex justify-content-center" role="status">
           <span className="sr-only"></span>
          </div>
         
}

       <div className='d-flex justify-content-center'>
       <div className='d-flex flex-column justify-content-between m-3' >
       
           <h4 className='my-3'>followers</h4> 
            {followers.map((follower)=>(
                <div key={follower.id} className=' d-flex align-items-center m-3'>
                    <img className='rounded-circle mx-2' style={{width:"40px",height:"40px"}} src={follower.profile_pic} alt="follower"/>
                    <p  style={{width:"50px"}}>{follower.username}</p>
                    <button className='btn btn-danger mx-5' onClick={()=>{handledelete(follower.id)}}>remove</button>
                </div>
                
            ))}
            
      
        </div>
     </div>
    
  </div>
  )
}


export default Profile