import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Browse from './pages/Browse'

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'browse',
    element: <Browse/>
  },
])

export default App;
