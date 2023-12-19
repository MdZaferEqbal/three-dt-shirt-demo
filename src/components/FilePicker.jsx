import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import state from "../store";

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  const colorStyle = {
    color: snap.color,
  }

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input id="three-DT-file-upload" type="file" accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}/>
        <label htmlFor="three-DT-file-upload" className={"filepicker-label"}>
          Upload File
        </label>
        <p className="mt-2 text-xs truncate" style={colorStyle}>
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton type="outline" title="logo" handleClick={() => readFile('logo')}
        className="text-xs"/>
        <CustomButton type="filled" title="Full" handleClick={() => readFile('full')}
        className="text-xs"/>
      </div>
    </div>
  )
}

export default FilePicker
