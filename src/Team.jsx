import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);

    const handleAdd = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handleRemove = ()=>{
        const newTeam = team - 1;
        setTeam(newTeam)
    }

  const  teamStyle ={
        border:"2px solid white",
        background:"salmon",
        padding:"20px",
        margin:"20px",
    }
return(
    <div style={teamStyle}>
        <h2>Player: {team} </h2>
        <button onClick={handleAdd} style={{marginRight:"20px"}}>Add</button>
        <button onClick={handleRemove}>Remove</button>
    </div>
)
}