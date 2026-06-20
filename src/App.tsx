import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing';
import Whatwedo from './components/whatWeDo';
import HowWeDoIt from './components/howWeDo';
import Footer from './components/footer';
import GetQuote from './components/getAquote';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Landing/>},
    {path: '/what', element: <Whatwedo/>},
    {path: '/how', element: <HowWeDoIt/>},
    {path: '/contact', element: <Footer/>},
    {path: '/quote', element: <GetQuote/>},
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
