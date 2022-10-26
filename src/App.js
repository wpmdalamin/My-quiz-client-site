import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <div className='bg-dark text-white'>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
