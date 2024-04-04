import { createSignal } from 'solid-js';

function InputFile() {
  const [file, setFile] = createSignal(null);

  const handleFileChange = (event) => {
    const target = event.target;
    const selectedFile = target.files && target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    if (file()) {
      console.log('Uploading file:', file().name);
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default InputFile;
