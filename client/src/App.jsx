import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </Router>
  )
}

export default App
