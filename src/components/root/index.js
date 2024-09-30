import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Home } from "../../components/Home";
import { Programs } from "../../components/Programs";
import { Admissions } from "../../components/Admissions";



const useHashChange = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const topPos = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: topPos - 100, 
          behavior: 'smooth'
        });
      }
    };

    if (hash) {
      handleHashChange();
    }


    window.addEventListener('hashchange', handleHashChange);


    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [hash]);
};

export const Root = () => {
  useHashChange();

  return (
    <>
      {/* <NavBar /> */}
      <Home id="home" />
      <Programs id="programs" />
      <Admissions id="admissions" />
 
 
      {/* <Outlet/> */}
    </>
  );
};


