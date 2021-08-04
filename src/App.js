import './App.css';
import Profile from './components/Profile';
import Config from './Config'
import { useState } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [barMode, setBarMode] = useState(false)
  const darkSelect = () => {
    setDarkMode(true)
    setBarMode(true)
  }
  const lightSelect = () => {
    setBarMode(false)
    setDarkMode(false)
  }
  return (
    <div className={darkMode === true ? "darkColor" : "darkcolor"}>
      <button onClick={darkSelect}>Dark mode</button>
      <button onClick={lightSelect}>Light mode</button>

      <Profile darkModeXolat={darkMode} bar={barMode} />
      <Config />
    </div>
  );
}



export default App;



// const username = "Samandar";

//   const allUsers=[
//     {
//       name:'Arabjon',
//       age:23,
//       id:3
//     },
//     {
//       name:'Samandar',
//       age:20,
//       id:2
//     },
//     {
//       name:'Saidakbar',
//       age:21,
//       id:1
//     },
//     {
//       name:'Shavkatjon',
//       age:22,
//       id:4
//     }   