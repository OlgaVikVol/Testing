// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const onClick = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 1000)
//   }, [])
//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-element">toggle</div>}
//       {data && <div style={{color: 'red'}}>data</div>}
//       <h1>React Testing Example</h1>
//       <button data-testid="toggle-btn" onClick={onClick}>click me</button>
//       <input onChange={e => setValue(e.target.value)} type="text" placeholder='input value...' />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App;
