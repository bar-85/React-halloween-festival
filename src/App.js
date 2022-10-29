import Hero from './components/Hero/Hero'
import TheTickets from './components/TheTickets/TheTickets'
import Quiz from './components/Quiz/Quiz'
import Contact from './components/Contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Wrapper } from './App.styles'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Wrapper>
					<Routes>
						<Route path='/' element={<Hero />} />
						<Route path='/the-tickets' element={<TheTickets />} />
						<Route path='/quiz' element={<Quiz />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</Wrapper>
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default App
