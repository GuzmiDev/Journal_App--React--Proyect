import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="What happend today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://s3.voyapon.com/wp-content/uploads/sites/3/2021/05/17231652/YourName00a.jpg"
            alt="note"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
