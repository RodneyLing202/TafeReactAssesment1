import { useNavigate } from "react-router-dom"
import { Button } from "../componenets"
import Storage from "../services/storage"



export const ClearAll = ()=>{
    let navigate  = useNavigate()

    const confirmClear = () =>{
        Storage.setItem("Notes",[])
        navigate("/")
    }

    return(
        <div>
            <div>
            Do you want to clear all posts

            </div>
            <div>
                <Button title={"Confirm Delete"} onClick = {confirmClear}/>
            </div>
            
        </div>
    )
}