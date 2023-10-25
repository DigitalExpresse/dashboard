import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";

function App() {

  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage/>} />
                <Route path="/connection" element={<ConnectionPage/>} />
                <Route path="/" element={<ConnectionPage/>} />
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
