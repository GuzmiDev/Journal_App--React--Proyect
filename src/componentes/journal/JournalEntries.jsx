import JournalEntrey from "./JournalEntrey";
import { useSelector } from "react-redux";

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <div className="journal__entries">
      {notes.map((note) => (
        <JournalEntrey key={note.id} {...note} />
      ))}
    </div>
  );
};

export default JournalEntries;
