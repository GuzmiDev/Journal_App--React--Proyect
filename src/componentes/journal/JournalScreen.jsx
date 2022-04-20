import { useSelector } from "react-redux";
import NoteScreen from "../notes/NoteScreen";
import SideBar from "./SiderBar";
import NothingSelected from "./NothingSelected";

const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content">
      <SideBar />
      <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
    </div>
  );
};

export default JournalScreen;
