import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function DeleteParticipant(){
    const [id,setId] = useState("")
    const navigateTo = useNavigate()

    async function deleteParticipant(){
        if(id !== ""){
            fetch(`http://localhost:8080/api/meetings/1/participants/${id}`, {method: 'delete'})
        }
        navigateTo("/")
    }
    return(
        <div>
            <h1>Delete Participant</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <button onClick={()=>deleteParticipant()}>Submit</button>
            </div>
        </div>
    )
}

export default DeleteParticipant