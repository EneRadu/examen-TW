import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function CreateParticipant(){
    const [id,setId] = useState("")
    const [nume,setNume] = useState("")
    const [meetingId,setmeetingId] = useState("")
    const navigateTo = useNavigate()

    async function createParticipant(){
        if(id !== "" && nume !==""){
            fetch('http://localhost:8080/api/meetings/1/participants', {method: 'post', headers: {'Content-Type':'application/json'}, body: `{"id":${id},"nume":"${nume}","meetingId":${meetingId}}`})
        }
        navigateTo("/")
    }
    return(
        <div>
            <h1>Create Participant</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Nume" onChange={(e)=>setNume(e.target.value)}></input>
                <br></br>
                <input type="number" placeholder="meetingId" onChange={(e)=>setmeetingId(e.target.value)}></input>
                <br></br>
                <button onClick={()=>createParticipant()}>Submit</button>
            </div>
        </div>
    )
}

export default CreateParticipant