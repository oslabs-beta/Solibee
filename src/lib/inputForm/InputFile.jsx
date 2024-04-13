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
      <input data-testid="upInput" class="rounded-md" type='file' onChange={handleFileChange} />
      <button class="bg-orange-100 rounded-md	p-1 px-2" onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default InputFile;
