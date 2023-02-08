import './css/style.css';
import './css/custome.css';

// PLUGINS
import { Route, Routes } from "react-router-dom"

// PAGES 
import {Home, Leader, Profile } from './pages'

// COMPONENTS
import {Header,Footer } from './components'

function App() {
  return (
    <div className="App h-100">
      <div className='d-flex flex-column h-100'>  
       <Header/>
       <div className='body-content'>
        <Routes>
           <Route path="/" exact element={<Home/>} />
            <Route path="/leader" exact element={<Leader/>} />
            <Route path="/profile" exact element={<Profile />} />
        </Routes>
       </div>
      <Footer/>
      </div>
    </div>
  );
}
export default App;
