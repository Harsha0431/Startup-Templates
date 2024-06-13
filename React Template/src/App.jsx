import './App.css'
import { Routes, Route } from 'react-router-dom'
import PageOne from './Views/PageOne';
import PageTwo from './Views/PageTwo';

function App() {
  return (
    <div className='flex w-[100dvw] min-h-[100dvh]'>
      <Routes>
        <Route path='/' element={<PageOne />} />
        <Route path='/two' element={<PageTwo />} />
      </Routes>
    </div>
  )
}

export default App
