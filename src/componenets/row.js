import { NoteTitle } from "./noteTitle";
import { NoteBody } from "./noteBody";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Card from "react-bootstrap/Card";
import { Button } from "./button";
export const Row = ({ props }) => {
  return (
    <Draggable>
      <Card style={{ width: "18rem", margin: "auto", margin:"3px" }}>
        <Card.Body>
          <Card.Title>
            <NoteTitle title={props.Title} />
          </Card.Title>
          <Card.Text>
            <NoteBody body={props.Body} />
            <Card.Link>
              <Link to={`editNote/${props.Id}`}>
                <Button title="edit" buttonType="primary"></Button>
              </Link>
            </Card.Link>
            <Card.Link>
              <Link to={`deleteNote/${props.Id}`}>
                <Button title="Delete" buttonType="secondary"></Button>
              </Link>
            </Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Draggable>
  );
};
