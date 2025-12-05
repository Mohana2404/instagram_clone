import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewStories from './viewStories.jsx'
import Profile from './Profile.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/stories/:story_id/:total_stories',
    element:<ViewStories/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)
