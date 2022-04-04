import { NoteTitle } from "./noteTitle";
import { NoteBody } from "./noteBody";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Card from "react-bootstrap/Card";
export const Row = ({ props }) => {
  //   console.log(props);

  return (
    <Draggable>
      <Card style={{ width: '18rem' }}>

        <Card.Body>
          <Card.Title>
            <NoteTitle title={props.Title} />

          </Card.Title>
          <Card.Text>
            <NoteBody body={props.Body} />
            <Link to={`editNote/${props.Id}`}>
              <button>edit</button>
            </Link>
            <Link to={`deleteNote/${props.Id}`}>
              <button>Delete</button>
            </Link>
          </Card.Text>

        </Card.Body>
      </Card>
    </Draggable>
  );
};
