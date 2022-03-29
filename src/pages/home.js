import { useState, useEffect } from "react";
import { Row } from "../componenets/row";
import storage from "../services/storage";

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
  return (
    <div>
      Home
      {Notes.map((note) => (
        <Row key={keyNum++} props={note} />
      ))}
    </div>
  );
};
