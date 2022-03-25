import { Note } from "./Note";

export default function Notes ({notes, toggleImportant}) {
  return (
    <ul> {
      notes.map(
        note => <Note note={note} toggleImportant={toggleImportant} />
      )
    } </ul>
  );
};
