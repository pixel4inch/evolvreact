import './css/style.css';
import './css/custome.css';

// PLUGINS
import { Route, Routes } from "react-router-dom"

// PAGES 
import {Home, Leader, Profile, AdvisorCouncil, InnovatorSynergies, Sustainability, IndianInfluencer, DiversityEquityInclusion, Calender, Login, Insider, MemberShip, Recognitions,DataDashboard, Volunteer,  Sponsors, Media,
        PrivacyPolicy, ServiceAggrement, Partner,  Contact, CalEvents, Error } from './pages'

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
           {/* About */ }
            <Route path="/leader" exact element={<Leader/>} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/advisorcouncil" exact element={<AdvisorCouncil/>}/>
            <Route path="/calender" exact element={<Calender/>}/>
            
            {/*PROGARM*/ }

            <Route path="/innovatorSynergies" exact element={<InnovatorSynergies/>} />
            <Route path="/stainability" exact element={<Sustainability/>} />
            <Route path="/indianinfluencer" exact element={<IndianInfluencer/>}/>
            <Route path="/diversityequityinclusion" exact element={<DiversityEquityInclusion/>}/>
            
            <Route path="/recognitions" exact element={<Recognitions/>}/>
            <Route path="/memberShip" exact element={<MemberShip/>}/>
            <Route path="/insider" exact element={<Insider/>}/>
            <Route path="/login" exact element={<Login/>}/>

    
              {/*FOOTER*/ }
            <Route path="/datadashboard" exact element={<DataDashboard/>}/>
            <Route path="/volunteer" exact element={<Volunteer/>}/>
            <Route path="/sponsors" exact element={<Sponsors/>}/>
            <Route path="/media" exact element={<Media/>}/>
            <Route path="/privacypolicy" exact element={<PrivacyPolicy/>}/>
            <Route path="/serviceaggrement" exact element={<ServiceAggrement/>}/>
            <Route path="/Partner" exact element={<Partner/>}/>
            <Route path="/contact" exact element={<Contact/>}/>

            {/* ERROR */}

             <Route   path="*"  element={<Error/>}/>

            {/* INNER PAGES */}
            <Route path="/calender/calevents/:EventId" exact element={<CalEvents/>}/>


        </Routes>
       </div>
      <Footer/>
      </div>
    </div>
  );
}
export default App;
