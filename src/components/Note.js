// Componente contenido: encargado de mostrar la vista
export const Note = ({note, toggleImportant}) => {
    return (
      <li key={note.id} onClick={() => toggleImportant(note.id)}>
        {note.content}
        <strong> { 
          note.important 
            ? "important" 
            : "not important"}
          </strong>
      </li>
    );
  }
  