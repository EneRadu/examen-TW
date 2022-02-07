import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function CreateMeeting(){
    const [id,setId] = useState("")
    const [descriere,setDescriere] = useState("")
    const [url,setUrl] = useState("")
    const navigateTo = useNavigate()

    async function createMeeting(){
        if(id !== "" && descriere !== "" && url !== ""){
            fetch('http://localhost:8080/api/meetings', {method: 'post', headers: {'Content-Type':'application/json'}, body: `{"id":${id},"descriere":"${descriere}","url":"${url}"}`})
        }
        navigateTo("/")
    }

    return(
        <div>
            <h1>Create Meeting</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Descriere" onChange={(e)=>setDescriere(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Url" onChange={(e)=>setUrl(e.target.value)}></input>
                <br></br>
                <button onClick={()=>createMeeting()}>Submit</button>
            </div>
        </div>
    )
}

export default CreateMeeting