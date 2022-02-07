import { Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
import CreateMeeting from './CreateMeeting'
import CreateParticipant from './CreateParticipant'
import DeleteMeeting from './DeleteMeeting'
import DeleteParticipant from './DeleteParticipant'
import UpdateMeeting from './UpdateMeeting'
import UpdateParticipant from './UpdateParticipant'
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/CreateMeeting" element={<CreateMeeting/>}/>
      <Route path="/CreateParticipant" element={<CreateParticipant/>}/>
      <Route path="/DeleteMeeting" element={<DeleteMeeting/>}/>
      <Route path="/DeleteParticipant" element={<DeleteParticipant/>}/>
      <Route path="/UpdateMeeting" element={<UpdateMeeting/>}/>
      <Route path="/UpdateParticipant" element={<UpdateParticipant/>}/>
    </Routes>
  )
}

export default App;
