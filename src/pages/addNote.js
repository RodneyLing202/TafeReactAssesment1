import { useEffect, useState } from "react";
import { Button, EditTitle, Editbody } from "../componenets/";
import Storage from "../services/storage";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form"

export const AddNote = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setInputTitle(Storage.getSessionItem("title"));
    setInputBody(Storage.getSessionItem("body"));
  });

  const onTitleChange = (event) => {
    const input = event.target.value;
    Storage.setSessionItem("title", input);
    setInputTitle(input);
  };

  const onBodyChange = (event) => {
    const input = event.target.value;
    Storage.setSessionItem("body", input);

    setInputBody(input);
  };

  const GenerateId = () => {
    let Notes = Storage.getItem("Notes");

    let maxId = 0;

    Notes.forEach((element) => {
      if (element.Id > maxId) {
        maxId = element.Id;
      }
    });
    return maxId + 1;
  };

  const createNote = () => {
    let NoteId = GenerateId();
    let sesTitle = Storage.getSessionItem("title");
    let sesBody = Storage.getSessionItem("body");
    // console.log("SessTitle", sesTitle, "sesBody", sesBody);
    if (sesTitle == "") {
      sesTitle = `Note Number ${NoteId}`;
    }
    if (sesBody == "") {
      setErrorMessage("please enter a body to the note");
      return;
    }
    const new_note = { Id: NoteId, Title: sesTitle, Body: sesBody };
    const Notes_copy = Array.from(Storage.getItem("Notes"));

    console.log("Note copy", Notes_copy);
    Notes_copy.push(new_note);
    Storage.setItem("Notes", Notes_copy);

    clearSession();
    navigate("/editNote");
  };

  const clearSession = () => {
    Storage.setSessionItem("title", "");
    Storage.setSessionItem("body", "");
  };

  const setDefaultBody = () => {
    console.log(inputBody);
    return inputBody;
  };

  const setDefaultTitle = () => {
    console.log(inputTitle);
    return inputTitle;
  };

  return (
    <div>
      <div>Add an New Note</div>
      <div>
        <Form>
          {/* <div>
            <label>note Title</label>
            <input
              type={"text"}
              onChange={onTitleChange}
              defaultValue={setDefaultTitle()}
            ></input>
          </div>
           */}
          <EditTitle onChange={onTitleChange} defaultValue={setDefaultTitle} />
          <br />
          <Editbody onChange={onBodyChange} defaultValue={setDefaultBody} />
          {/* <div>
            <label>note Body</label>
            <textarea
              
            ></textarea>
          </div> */}
        </Form>
        {errorMessage}
      </div>

      <Button title="Add Note" onClick={createNote} />
    </div>
  );
};
