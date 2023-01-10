import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes';

function App() {
  return (
    <div className=' max-w-screen-lg mx-auto' data-theme="night" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
