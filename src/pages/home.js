import { useState, useEffect } from "react";
import { Row } from "../componenets/row";
import storage from "../services/storage";
import Container from "react-bootstrap/esm/Container";
export const Home = () => {
  let postInfo = [
    {
      Id: 1,
      Title: "Note Number 1",
      Body: "This is the body of Note 1",
    },
    {
      Id: 2,
      Title: "Note Number 2",
      Body: "This is the body of Note 2",
    },
    {
      Id: 3,
      Title: "Note Number 3",
      Body: "This is the body of Note 3",
    },
  ];
  const [Notes, setNotes] = useState([]);
  useEffect(() => {
    setNotes(storage.getItem("Notes"));
  }, []);
  //   storage.setItem("Notes", postInfo)

  //   let Notes = storage.getItem("Notes")
  //   console.log(Notes);
  let keyNum = 0;

  if (Notes.length === 0) {
    return <div>You have no Notes stored add a note using a link above</div>;
  }

  return (
    <Container style={{ width: "80%" }}>
      <h1>Home Page</h1>
      {Notes.map((note) => (
        <Row key={keyNum++} props={note} />
      ))}
    </Container>
  );
};
