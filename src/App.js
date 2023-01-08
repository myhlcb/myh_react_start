import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Login from '@/pages/Login';
import AuthComponent from '@/components/AuthComponent';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route
            path='/layout'
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
