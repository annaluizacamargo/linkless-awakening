import { Box, Container } from '@mui/material'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import MonstersForm from '@pages/cadastro'
import BattleArena from '@pages/batalhas'
import NotFoundPage from '@pages/404'
import HomePage from './pages'

/**
 * MainLayout Component
 * @description This component serves as the main layout for the application, including the header and footer.
 */
function MainLayout({ home = false }: { home?: boolean }) {
  return (
    <Container className={home ? 'main-container-home' : 'main-container'}>
      {!home && <Header />}
      <Outlet />
    </Container>
  )
}

/**
 * Linkless Awakening App
 * @description This is the main component of the Linkless Awakening application.
 */
export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout home={true} />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/cadastro" element={<MonstersForm />} />
            <Route path="/batalhas" element={<BattleArena />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>

        <Footer />

        <Box className="background-box" />
      </div>
    </Router>
  )
}
