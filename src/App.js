import './App.css';

import Navbar from './components/navbar/Navbar.jsx'
import Content from './components/content/Content'

const App = () => (
  <div className="App">
    <Navbar>
      <Content />
    </Navbar>
  </div>
)


export default App;