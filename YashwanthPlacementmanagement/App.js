
import './App.css';

import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route,useParams} from 'react-router-dom';
import Navbar from './components/Navbar';
import CertificateView from './components/CertificateView';
import Navigation from './components/Navigation';
import DeleteCertificate from './components/CertificateDelete';
import Aboutus from './components/Aboutus';
import ViewAll from './components/ViewAll';
import AddCertificate from './components/CertificateCreate';
import UpdateCertificate from './components/CertificateUpdate';
import GetCertificateId from './components/GetCertificateId';
import Register from './components/Register';
import Login from './components/Login';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import CertificateName from './components/CertificateName';
function App() {
  return (
    
     <div className='App'>
    <Router>
      <div className='content-wrapper'>
    <Navbar>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<Aboutus/>} />
          <Route path='/navigation' element={<ProtectedRoute><Navigation/></ProtectedRoute>}/>
          <Route path='/view' element={<ProtectedRoute><ViewAll/></ProtectedRoute>}/>
          <Route path="/viewbyid" element={<ProtectedRoute><CertificateView /></ProtectedRoute>} />
          <Route path="/viewbyname" element={<ProtectedRoute><CertificateName /></ProtectedRoute>} />
          <Route path='/AddCertificate' element={<ProtectedRoute><AddCertificate/></ProtectedRoute>}/>
          <Route path='/Updatecertificate' element={<ProtectedRoute><GetCertificateId/></ProtectedRoute>}/>
          <Route path="/update/:certificateId" element={<ProtectedRoute><UpdateCertificateWrapper /></ProtectedRoute>} />
          <Route path='/Deletecertificate' element={<ProtectedRoute><DeleteCertificate/></ProtectedRoute>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/contact' element={<Contactus/>}/>
          
          </Routes>
          </Navbar>
          </div>
      <Footer/>
    </Router>
    </div>
   
  );
};
const UpdateCertificateWrapper = () => {
  const { certificateId } = useParams();
  return <UpdateCertificate certificateId={certificateId} />;
};


export default App;
