import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
// import NavBar from '../Pages/Shared/NavBar';

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* <NavBar></NavBar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;