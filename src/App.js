import './App.css'
import Hero from './components/Hero/Hero'
import TheTickets from './components/TheTickets/TheTickets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
	return (
		<BrowserRouter>
			<div className='App'>
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/the-tickets' element={<TheTickets />} />
        </Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
