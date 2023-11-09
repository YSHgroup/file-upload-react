import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UploadField from './components/UploadField'
import './SASS/global.scss'
import { useEffect, useState } from 'react'
import {postServer} from './functions'
import { ArgType } from './types'


function App() {
  const [testData, setTestData] = useState<ArgType>({ name: '', age: 0 })
  useEffect(() => {
    setTestData({ name: 'david', age: 24 })

  },[])
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
        <UploadField />
        <button onClick={() => postServer(testData)}>click</button>
    </>
  )
}

export default App
