import {Route, Routes} from 'react-router-dom';
import ProfilePage  from './components/ProfilePage/ProfilePage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Login/>} exact/>
           <Route path="Register" element={<Register/>}/>
           <Route path="/Profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
