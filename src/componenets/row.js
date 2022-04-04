import { NoteTitle } from "./noteTitle";
import { NoteBody } from "./noteBody";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import { Button } from "./button";
export const Row = ({ props }) => {
  return (
    <Draggable>
      <Accordion flush>
        <Accordion.Header>
          <Badge bg="primary">
            <NoteTitle title={props.Title} />
          </Badge>
        </Accordion.Header>
        <Accordion.Body>
          <NoteBody body={props.Body} />

          <Card style={{ width: "18rem", margin: "auto", marginTop: "3px" }}>
            <Card.Body>
              <Card.Text>
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
        </Accordion.Body>
      </Accordion>
    </Draggable>
  );
};
