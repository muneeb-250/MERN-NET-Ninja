import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
function App() {

  return (
    <div className="app bg-gradient-to-r from-cyan-500 to-blue-500">
      <Router>
        <Navbar />
        <div className="pages">
          <Route path="/" component={Home} />
        </div>
      </Router>
    </div>
  )
}

export default App
