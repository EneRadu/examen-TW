import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function DeleteMeeting(){
    const [id,setId] = useState("")
    const navigateTo = useNavigate()

    async function deleteMeeting(){
        if(id !== ""){
            fetch(`http://localhost:8080/api/meetings/${id}`, {method: 'delete'})
        }
        navigateTo("/")
    }
    return(
        <div>
            <h1>Delete Meeting</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <button onClick={()=>deleteMeeting()}>Submit</button>
            </div>
        </div>
    )
}

export default DeleteMeeting