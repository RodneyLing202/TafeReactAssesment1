import { Route, Routes, useParams } from "react-router-dom";
import { Home, AddNote, EditNoteBase, EditNoteId, DeleteNote, ClearAll } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="addNote" element={<AddNote />} />

      <Route path="editNote">
        <Route index element={<EditNoteBase />} />
        <Route path=":Id" element={<EditNoteId />} />
      </Route>
      <Route path="deleteNote">
        <Route index element={<div> Note not found</div>} />
        <Route path=":Id" element={<DeleteNote />} />
      </Route>
      <Route path="clearAll" element = {<ClearAll/>}/>
      <Route path="*" element={<div> 404 not found</div>} />
    </Routes>
  );
};
