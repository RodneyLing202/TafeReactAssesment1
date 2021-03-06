import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Editbody, EditTitle } from "../componenets";
import Storage from "../services/storage";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

export const EditNoteBase = (props) => {
  const [inputNoteNum, setInputNoteNum] = useState("");
  const navigate = useNavigate();

  const { errorMessage } = props;

  const onInputChange = (event) => {
    const input = event.target.value;
    setInputNoteNum(input);
  };
  const submitInput = () => {
    navigate(`/editNote/${inputNoteNum}`);
  };
  const DisplayErrorMessage = () => {
    if (errorMessage != null) return errorMessage;
    else return "";
  };

  return (
    <Container>
      {DisplayErrorMessage()}
      <Form>
        <Form.Label><h1>Edit Which Note</h1></Form.Label>
        <Form.Control type={"text"} onChange={onInputChange}></Form.Control>
        <br />

        <Button title={"Go to Note"} onClick={submitInput} />
      </Form>
    </Container>
  );
};

export const EditNoteId = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  const [ErrorState, setError] = useState(false);
  const navigate = useNavigate();
  let { Id } = useParams();
  console.log("id:", Id);
  useEffect(() => {
    let Notes = Storage.getItem("Notes");
    let tempNote = Notes.filter((element) => element.Id == Id);
    console.log(tempNote);
    if (tempNote.length === 1) {
      setInputTitle(tempNote[0].Title);
      setInputBody(tempNote[0].Body);
    } else {
      setError(true);
    }
  });

  const onTitleChange = (event) => {
    const input = event.target.value;
    setInputTitle(input);
  };

  const onBodyChange = (event) => {
    const input = event.target.value;

    setInputBody(input);
  };

  const setDefaultBody = () => {
    return inputBody;
  };

  const setDefaultTitle = () => {
    return inputTitle;
  };

  const confirmEdit = () => {
    console.log("confirm hit");
    console.log("new title", inputTitle);
    console.log("new body", inputBody);
    let Notes = Array.from(Storage.getItem("Notes"));
    console.log("Notes pre change", Notes);

    let Ids = Notes.map((element) => element.Id);
    let index = Ids.indexOf(parseInt(Id));

    console.log("Id", Id);
    console.log("IDs", Ids);
    console.log("index", index);

    Notes[index].Title = inputTitle;
    Notes[index].Body = inputBody;

    console.log("Notes post change", Notes);
    Storage.setItem("Notes", Notes);
    navigate(-1);
  };

  if (ErrorState) {
    return (
      <Container>
        <div>there was a problem finding an Note with that Id</div>
        <Button
          title={"go back to find a note"}
          onClick={() => navigate("/editNote")}
        />
      </Container>
    );
  } else
    return (
      <Container>
        Editing Note {Id}
        <Form>
          <EditTitle onChange={onTitleChange} defaultValue={setDefaultTitle} />
          <Editbody onChange={onBodyChange} defaultValue={setDefaultBody} />
          <br />

          <Button title="Confirm Edit" onClick={confirmEdit} />
        </Form>
      </Container>
    );
};
