import NoteScreen from "../notes/NoteScreen";
import SideBar from "./SiderBar";
// import NothingSelected from "./NothingSelected";

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <SideBar />
      <main>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
