import { Box, Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NotFoundPage from '@pages/404'
import MonstersForm from '@pages/cadastro'
import BattleArena from '@pages/batalhas'
import './App.css'

/**
 * Linkless Awakening App
 * @description This is the main component of the Linkless Awakening application.
 */
export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Container className="main-container" maxWidth="lg">
          <Routes>
            <Route path="/" element={<MonstersForm />} /> {/* Default route to MonstersForm [Monsters registration] */}
            <Route path="/cadastro" element={<MonstersForm />} /> {/* Monsters registration page */}
            <Route path="/batalhas" element={<BattleArena />} /> {/* Battle arena page */}
            <Route path="*" element={<NotFoundPage />} /> {/* 404 Not Found page */}
          </Routes>
        </Container>

        <Footer />

        <Box className="background-box" />
      </div>
    </Router>
  )
}
