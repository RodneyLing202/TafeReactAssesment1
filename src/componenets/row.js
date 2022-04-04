import { NoteTitle } from "./noteTitle";
import { NoteBody } from "./noteBody";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import { Button } from "./button";
import Container from "react-bootstrap/esm/Container";
export const Row = ({ props }) => {
  return (
    <Draggable>
      <Card>
        <Accordion>
          <Accordion.Header>
            <Badge bg="primary">
              <NoteTitle title={props.Title} />
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
            <Card style={{ margin: "auto", marginTop: "3px" }}>
              <Card.Body>
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
          </Accordion.Body>
        </Accordion>
      </Card>
    </Draggable>
  );
};
