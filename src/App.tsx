import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [fileList, setFileList] = useState<FileList | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFileList(files)
    }
  }

  const handleUploadClick = () => {
    if(!fileList) return
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append('file-'+i, file, file.name)
    })
    // formData.append('file', fileList[0])
    console.log('formData', formData)
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const files = fileList? [...fileList] : []

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>File Upload</h1>
      <div className="card">
        <input type="file" name="file-upload" id="file-upload" onChange={handleInputChange} multiple />
        <button onClick={handleUploadClick}>upload</button>
      </div>
    </>
  )
}

export default App
