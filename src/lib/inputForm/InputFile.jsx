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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file()) {
      console.log('Uploading file:', file().name);
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <form>
      <div class='flex items-baseline gap-2'>
        <label id='fileInputLabel' for='fileInput' class='mb-2 block p-2'>
          Choose a file:
        </label>
        <input
          data-testid='upInput'
          class='rounded-md border border-gray-300 bg-white p-2'
          id='fileInput'
          name='fileInput'
          type='file'
          onChange={handleFileChange}
          aria-labelledby='fileInputLabel'
        />
        <button
          aria-label = 'click button to submit chosen file'
          class='rounded-md bg-orange-100	px-2 py-1'
          onClick={(e) => handleSubmit(e)}
        >
          Upload
        </button>
      </div>
    </form>
  );
}

export default InputFile;
