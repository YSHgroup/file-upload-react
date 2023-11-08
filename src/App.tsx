import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UploadField from './components/UploadField'
import './SASS/global.scss'


function App() {
  
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
        <UploadField />
      </div>
    </>
  )
}

export default App
