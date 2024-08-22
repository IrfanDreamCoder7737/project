import React from 'react';
import {} from 'react-router-dom';
import style from './App.module.css';
import MainHeader from './component/mainHeader';
import Demo from './component/demo';
import Intro from './component/intro';
import Middle from './component/middle';
import Intro2 from './component/intro2';
import Homepage from './screens/Homepage';
import Aboutpage from './screens/Aboutpage';
import Text from './component/Text';
import Inbox from './component/Inbox';

function App() {
  return (
       <div>
    <MainHeader/>
    <Homepage/>
    <Aboutpage/>

         <Demo/>
         <Intro/>
         <Text/>
         <Middle/>
         <Intro2/>
         <Inbox/>

       </div>
  )
};


export default App;
