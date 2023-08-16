import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-slate-500 h-20">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
