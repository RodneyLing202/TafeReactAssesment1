import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, NoteBody, NoteTitle} from "../componenets";
import Storage from "../services/storage";

export const DeleteNote = () => {
  let { Id } = useParams();
  const navigate = useNavigate();

  const [Note, setNote] = useState({});
  useEffect(() => {
    let Notes = Storage.getItem("Notes");
    let tempNote = Notes.filter((element) => element.Id == Id);
    setNote(tempNote[0]);
  }, []);

  const deleteNote = () => {
    let Notes = Storage.getItem("Notes");
    let tempNotes = Notes.filter((element) => element.Id != Id);
    Storage.setItem("Notes", tempNotes);
    navigate("/");
  };

  return (
    <div>
      are you sure you want to delete Note {Id}
      <NoteTitle title={Note.Title}/>
      <NoteBody body = {Note.Body}/>
      <Button title={"Delete This Note"} onClick={deleteNote} />
    </div>
  );
};
