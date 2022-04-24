import React from 'react';
import './App.css';
import Header from '../src/Partial/Header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Partial/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import routes from './Pages/Router/Routes';
import Modal from './Components/Modal/Modal';




function App() {

  return (
    <div>
    <div className="overlay-screen"></div> 
    <div>
      <Header /> 
      <Routes> 
        {
          routes.map((route,index) => {
            const { path, element, isPrivate} = route;
            return isPrivate ? 
            (
              <Route key={index} element={'<PrivateRoute />'}>
                <Route key={index} path={path} element={element} />
              </Route>
            ) : 
            (
              <Route key={index} path={path} element={element} />
            );

          })
        }
      </Routes> 
        <Outlet />
        <Modal />
      <Footer/>
    </div>
    </div>
  );
}

export default App;
