import {Route, Routes} from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import ProfilePage  from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Homepage/>} exact/>
           <Route path="/Profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
