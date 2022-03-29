import { NoteTitle } from "./noteTitle";
import { NoteBody } from "./noteBody";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

export const Row = ({ props }) => {
//   console.log(props);

  return (
      <Draggable>

      
    <div>
      row comp
      <NoteTitle title={props.Title} />
      <NoteBody body={props.Body} />
      <Link to={`editNote/${props.Id}`}>
        <button>edit</button>
      </Link>
      <Link to={`deleteNote/${props.Id}`}>
        <button>Delete</button>
      </Link>
    </div>
    </Draggable>
  );
};
