import dayjs from "dayjs";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";
// advancedFormat permite usar la fecha ordinal entre otras opciones
const advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  const inputArchivo = useRef(null);
  const date = dayjs(active.date).format("YYYY MMMM DD");

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = (e) => {
    inputArchivo.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes_appbar">
      <span>{date}</span>

      <input
        ref={inputArchivo}
        type="file"
        onChange={handleFileChange}
        hidden
      />

      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
