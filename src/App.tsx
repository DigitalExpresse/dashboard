import './styles/App.css'
import './styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConnectionPage from "./pages/connectionPage/ConnectionPage.tsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.tsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.tsx";

function App() {

  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage/>} />
                <Route path="/connection" element={<ConnectionPage/>} />
                <Route path="/" element={<DashboardPage/>} />
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
