import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Namechange from '../../Namechange';
import Logoslider from '../components/LogoSlider';
import OnChange from '../../OnChange';
import NotFound from '../components/NotFound';
import PrivacyPage from '../pages/PrivacyPage';
import ToU from '../pages/ToU';
import Hero from '../pages/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='footer' element={<Footer/>}/>
      <Route path='/privacy' element={<PrivacyPage/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/terms' element={<ToU />}/>
      <Route path="/heropage" element={<Hero />}/>
      <Route path="/logoslider" element={<Logoslider/>}/>
      {/*<Route path="/footer" element={<Footer />}/>*/}
      <Route path="/namechange" element={<Namechange />} />
      <Route path="/onchange" element={<OnChange />} />
      {/* any path that is not matched above will go to Notfound
      the * symbolize the catch-all any unknown route */}
      <Route path="*" element={<NotFound to="/"/>}/>
    </Routes>
  );
};

export default AppRoutes;
