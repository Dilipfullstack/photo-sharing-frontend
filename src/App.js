import LandingPage from './LandingPage/landing_page';
import PostView from './PostView/post_view';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

const baseURL = "http://localhost:3001/api";

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className='wrapper'>
      {/* <p>{images}</p> */}
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<PostView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
