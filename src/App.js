import './css/style.css';
import './css/custome.css';

// PLUGINS
import { Route, Routes } from "react-router-dom"

// PAGES 
import {Home, Leader, Profile, AdvisorCouncil, Calender, DataDashboard, Volunteer,  Sponsors, Media, PrivacyPolicy, ServiceAggrement, Partner,  Contact } from './pages'

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
            <Route path="/advisorcouncil" exact element={<AdvisorCouncil/>}/>
            <Route path="/calender" exact element={<Calender/>}/>

            <Route path="/datadashboard" exact element={<DataDashboard/>}/>
            <Route path="/volunteer" exact element={<Volunteer/>}/>
            <Route path="/sponsors" exact element={<Sponsors/>}/>
            <Route path="/media" exact element={<Media/>}/>
            <Route path="/privacypolicy" exact element={<PrivacyPolicy/>}/>
            <Route path="/serviceaggrement" exact element={<ServiceAggrement/>}/>
            <Route path="/Partner" exact element={<Partner/>}/>
            <Route path="/contact" exact element={<Contact/>}/>

        </Routes>
       </div>
      <Footer/>
      </div>
    </div>
  );
}
export default App;
