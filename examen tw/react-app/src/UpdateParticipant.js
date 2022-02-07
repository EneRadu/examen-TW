import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function UpdateParticipant(){
    const [id,setId] = useState("")
    const [nume,setNume] = useState("")
    
    const navigateTo = useNavigate()

    async function updateParticipant(){
        if(id!==""){
            fetch(`http://localhost:8080/api/meetings/1/participants/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"id":${id}}`})  
        }
        if(nume!==""){
            fetch(`http://localhost:8080/api/meetings/1/participants/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"nume":"${nume}"}`})  
        }
        navigateTo("/")
    }

    return(
        <div>
            <h1>Update Meeting</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Nume" onChange={(e)=>setNume(e.target.value)}></input>
                <br></br>
                <button onClick={()=>updateParticipant()}>Submit</button>
            </div>
        </div>
    )
}

export default UpdateParticipant