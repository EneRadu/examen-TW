import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function UpdateMeeting(){
    const [id,setId] = useState("")
    const [descriere,setDescriere] = useState("")
    const [url,setUrl] = useState("")
    const [data,setData] = useState("")
    const navigateTo = useNavigate()

    async function updateMeeting(){
        if(id!==""){
            fetch(`http://localhost:8080/api/meetings/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"id":${id}}`})  
        }
        if(descriere!==""){
            fetch(`http://localhost:8080/api/meetings/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"descriere":"${descriere}"}`})  
        }
        if(url!==""){
            fetch(`http://localhost:8080/api/meetings/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"url":"${url}"}`})  
        }
        if(data!==""){
            fetch(`http://localhost:8080/api/meetings/${id}`, {method: 'PATCH',headers: {'Content-Type':'application/json'}, body: `{"data":"${data}"}`})  
        }
        navigateTo("/")
    }

    return(
        <div>
            <h1>Update Meeting</h1>
            <div>
                <input type="number" placeholder="Id" onChange={(e)=>setId(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Descriere" onChange={(e)=>setDescriere(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Url" onChange={(e)=>setUrl(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Data" onChange={(e)=>setData(e.target.value)}></input>
                <br></br>
                <button onClick={()=>updateMeeting()}>Submit</button>
            </div>
        </div>
    )
}

export default UpdateMeeting