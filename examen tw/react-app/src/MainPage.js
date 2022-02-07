import { useState } from "react"
import {useNavigate} from 'react-router-dom'

function MainPage() {

    const [firstFilter, setfirstFilter] = useState("")
    const [secondFilter, setSecondFilter] = useState("")
    const [sortType, setsortType] = useState("")
    const [sortValue, setsortValue] = useState("")
    const navigateTo = useNavigate()

    async function updateMeetings() {
        let table = document.getElementById("table")
        table.innerHTML = ""
        let tablerow = document.createElement("tr")

        let tableheadId = document.createElement("th")
        tableheadId.innerHTML = "Id"
        tablerow.appendChild(tableheadId)

        let tableheadDescriere = document.createElement("th")
        tableheadDescriere.innerHTML = "Descriere"
        tablerow.appendChild(tableheadDescriere)

        let tableheadUrl = document.createElement("th")
        tableheadUrl.innerHTML = "Url"
        tablerow.appendChild(tableheadUrl)

        let tableheadData = document.createElement("th")
        tableheadData.innerHTML = "Data"
        tablerow.appendChild(tableheadData)

        table.appendChild(tablerow)

        let customString
        if (sortType === "Ascendent") {
            customString = "+"
        } else if (sortType === "Descendent") {
            customString = "-"
        }
        customString += sortValue

        let dataMeetings
        if (firstFilter === "" && secondFilter === "") {
            dataMeetings = await fetch(`http://localhost:8080/api/meetings`, { headers: { 'X-Sort': `${customString}` } })
        } else if (firstFilter !== "" && secondFilter === "") {
            dataMeetings = await fetch(`http://localhost:8080/api/meetings?filter=${firstFilter}`)
        } else if (firstFilter === "" && secondFilter !== "") {
            dataMeetings = await fetch(`http://localhost:8080/api/meetings?filter=${secondFilter}`)
        } else if (firstFilter !== "" && secondFilter !== "") {
            dataMeetings = await fetch(`http://localhost:8080/api/meetings?filter=${firstFilter},${secondFilter}`)
        }

        let dataMeetingsJson = await dataMeetings.json()

        let dataParticipants = await fetch(`http://localhost:8080/api/meetings/1/participants`)
        let dataParticipantsJson = await dataParticipants.json()

        for (let i = 0; i < dataMeetingsJson.length; i++) {
            tablerow = document.createElement("tr")

            let tabledataId = document.createElement("td")
            tabledataId.innerHTML = dataMeetingsJson[i].id
            tablerow.appendChild(tabledataId)

            let tabledataDescriere = document.createElement("td")
            tabledataDescriere.innerHTML = dataMeetingsJson[i].descriere
            tablerow.appendChild(tabledataDescriere)

            let tabledataUrl = document.createElement("td")
            tabledataUrl.innerHTML = dataMeetingsJson[i].url
            tablerow.appendChild(tabledataUrl)

            let tabledataData = document.createElement("td")
            tabledataData.innerHTML = dataMeetingsJson[i].data
            tablerow.appendChild(tabledataData)

            table.appendChild(tablerow)

            ///////////////////////////////

            let tableparticipant = document.createElement("table")
            tableparticipant.setAttribute("id", "table" + i)
            let tablerowparticipant = document.createElement("tr")

            let tableheadparticipantId = document.createElement("th")
            tableheadparticipantId.innerHTML = "Id"
            tablerowparticipant.appendChild(tableheadparticipantId)

            let tableheadparticipantNume = document.createElement("th")
            tableheadparticipantNume.innerHTML = "Nume"
            tablerowparticipant.appendChild(tableheadparticipantNume)

            tableparticipant.appendChild(tablerowparticipant)
            table.appendChild(tableparticipant)

            for (let j = 0; j < dataParticipantsJson.length; j++) {
                if (dataMeetingsJson[i].id === dataParticipantsJson[j].meetingId) {
                    tablerowparticipant = document.createElement("tr")

                    let tabledataparticipantId = document.createElement("td")
                    tabledataparticipantId.innerHTML = dataParticipantsJson[j].id
                    tablerowparticipant.appendChild(tabledataparticipantId)

                    let tabledataparticipantNume = document.createElement("td")
                    tabledataparticipantNume.innerHTML = dataParticipantsJson[j].nume
                    tablerowparticipant.appendChild(tabledataparticipantNume)

                    tableparticipant.appendChild(tablerowparticipant)
                }
            }
        }
    }

    return (
        <div>
            <div>
                <input id="firstfilter" type="text" placeholder="First filter" onChange={(e) => setfirstFilter(e.target.value)}></input>
                <input id="secondfilter" type="text" placeholder="Second filter" onChange={(e) => setSecondFilter(e.target.value)}></input>
                <select id="sortvalue" onChange={(e) => setsortValue(e.target.value)}>
                    <option>id</option>
                    <option>descriere</option>
                    <option>url</option>
                    <option>data</option>
                </select>
                <select id="sorttype" onChange={(e) => setsortType(e.target.value)}>
                    <option>Ascendent</option>
                    <option>Descendent</option>
                </select>
                <button onClick={() => updateMeetings()}>Search</button>
                <br></br>
                <label>Meetings:</label>
            </div>
            <div>
                <table id="table">

                </table>
            </div>
            <div>
                <button onClick={()=>navigateTo(`/createMeeting`)}>Create meeting</button>
                <button onClick={()=>navigateTo(`/createParticipant`)}>Create participant</button>
                <br></br>
                <button onClick={()=>navigateTo(`/updateMeeting`)}>Update meeting</button>
                <button onClick={()=>navigateTo(`/updateParticipant`)}>Update participant</button>
                <br></br>
                <button onClick={()=>navigateTo(`/deleteMeeting`)}>Delete meeting</button>
                <button onClick={()=>navigateTo(`/deleteParticipant`)}>Delete participant</button>
            </div>
        </div>
    );
}

export default MainPage;