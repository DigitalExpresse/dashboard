import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";

function App() {

  return (
    <>
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<ConnectionPage/>} />
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
