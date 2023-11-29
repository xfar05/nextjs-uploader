import Head from 'next/head';

export default function Home() {
  const handleSingleUpload = (event) => {
    const fileInput = event.target.querySelector('input[type="file"]');
    const selectedFile = fileInput.files[0];

    if (!selectedFile) {
      alert('Pilih file sebelum mengupload.');
      event.preventDefault(); 
    }
  };

  const handleMultiUpload = (event) => {
    const fileInput = event.target.querySelector('input[type="file"]');
    const selectedFiles = fileInput.files;

    if (selectedFiles.length === 0) {
      alert('Pilih setidaknya satu file sebelum mengupload.');
      event.preventDefault(); 
    }
  };

  return (
    <div>
      <Head>
        <title>Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Single Upload</h1>
        <form
          action="/api/single-upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSingleUpload}
        >
          <div>
            <label>Select File :</label><br />
            <input type="file" name="file" id="file" />
          </div>

          <button style={{ marginTop: '1rem' }}>Upload</button>
        </form>
        <br />
        <h2>Multi Upload</h2>
        <form
          action="/api/multi-upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleMultiUpload}
        >
          <div>
            <label>Pilih gambar</label> <br />
            <input type="file" name="files" multiple />
          </div>

          <button style={{ marginTop: '1rem' }}>Upload</button>
        </form>
      </main>
    </div>
  );
}
