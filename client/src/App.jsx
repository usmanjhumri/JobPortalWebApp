import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Path } from './ListofPath/ListOfPath'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {
          Path.map((path, i) => {
            return <Route key={i} path={path.path} element={path.component} />
          })
        }
      </Routes>
      <Footer />
    </>
  )
}
export default App
