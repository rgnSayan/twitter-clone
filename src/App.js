import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Widgets from './Components/Widgets'
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider'

function App() {
  const [{ user }] = useStateValue()
  return (
    <div >
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
