import { Box, Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GoldLogo from '@assets/logo/linkless-awakening-logo-gold.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFoundPage from '@pages/pagina-nao-encontrada'
import './App.css'

/**
 * Linkless Awakening App
 * @description This is the main component of the Linkless Awakening application.
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Container className="main-container" maxWidth="lg">
          <Routes>
            <Route
              path="/"
              element={
                <Box>
                  <img src={GoldLogo} alt="Linkless Awakening Logo" className="logo" />
                  <h1 className="construction-title">🏗️ Site em Construção...</h1>
                </Box>
              }
            />

            {/* <Route path="/cadastro" element={<AddNewMonsterPage />} /> */}
            <Route
              path="/cadastro"
              element={
                <Box>
                  <img src={GoldLogo} alt="Linkless Awakening Logo" className="logo" />
                  <h1 className="construction-title">🏗️ Site em Construção...</h1>
                </Box>
              }
            />

            {/* <Route path="/batalhas" element={<BattlesPage />} /> */}
            <Route
              path="/batalhas"
              element={
                <Box>
                  <img src={GoldLogo} alt="Linkless Awakening Logo" className="logo" />
                  <h1 className="construction-title">🏗️ Site em Construção</h1>
                </Box>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
        <Footer />
        <Box className="background-box" />
      </div>
    </Router>
  )
}

export default App
