import { NoteTitle } from "./noteTitle";
import { NoteBody } from "./noteBody";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Card from "react-bootstrap/Card";
import { Button } from "./button";
export const Row = ({ props }) => {
  //   console.log(props);
  //
  return (
    <Draggable>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <NoteTitle title={props.Title} />
          </Card.Title>
          <Card.Text>
            <NoteBody body={props.Body} />
            <Link to={`editNote/${props.Id}`}>
              <Button title="edit" buttonType="primary"></Button>
            </Link>
            <Link to={`deleteNote/${props.Id}`}>
              <Button title="Delete" buttonType="secondary"></Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Draggable>
  );
};
