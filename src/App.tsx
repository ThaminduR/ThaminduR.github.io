import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/:appId" element={<AppDetail />} />
      </Routes>
    </Layout>
  )
}
