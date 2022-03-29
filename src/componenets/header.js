import { Link } from "react-router-dom";


export const Header = () =>{
    return(
    <div className="links">
            React Router

            <Link to="/">home</Link>
            <span> </span>
            <Link to="/addNote">Add A New Note</Link>
            <span> </span>
            <Link to="/editNote">edit an existing Note</Link>
            <span> </span>
            <Link to="/clearAll">Clear All Notes</Link> 

        </div>
    )
}
            