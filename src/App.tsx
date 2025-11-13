import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AppBar from './components/Appbar/Appbar'
import Navbar from './components/Navbar/Navbar'
import RevenuePage from './pages/Revenue/Revenue'

function App() {

  return (
    <>
      <div className="app-bar-container">
        <AppBar />
      </div>
      <div className="app-shell">

        <div style={{ width: "100%", padding: '16px' }}>
          <div style={{ position: 'fixed', width: '100%', paddingRight: '30px', zIndex: 5000, backgroundColor: '#fff' }}>
            <div>
              <Navbar />
            </div>
          </div>
          <div className="container" role="main">
            <Routes>
              <Route path="/revenue" element={<RevenuePage />} />
              <Route path="/" element={<Navigate to="/revenue" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
