import {Route, Routes} from 'react-router-dom';
import ProfilePage  from './components/ProfilePage/ProfilePage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Followers from './components/UI/Followers/Followers';
function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Login/>} exact/>
           <Route path="Register" element={<Register/>}/>
           <Route path="/Profile" element={<ProfilePage/>}/>
           <Route path="/followers" element={<Followers/>}/>
      </Routes>
    </div>
  );
}

export default App;
