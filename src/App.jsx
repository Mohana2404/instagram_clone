import React from 'react'
import Sidebar from './Sidebar.jsx'
import Feed from './Feed.jsx'
import Stories from './Stories.jsx'
import Suggestions from './Suggestions.jsx'


const App = () => {
  return (<>
    <div className='d-flex vh=100' >
    <div className='w-20'>
      <Sidebar/>
    </div>
    
    <div className='w-50  '><Stories/><Feed/></div>
    
    <div className='w-30'><Suggestions/></div>
    
    
    </div>
    
    </>
  )
}

export default App