import TheHome from './views/TheHome/TheHome'
import TheTickets from './views/TheTickets/TheTickets'
import Quiz from './views/Quiz/Quiz'
import Contact from './views/Contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Wrapper } from './App.styles'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Wrapper>
					<Header />
					<Routes>
						<Route path='/' element={<TheHome />} />
						<Route path='/the-tickets' element={<TheTickets />} />
						<Route path='/quiz' element={<Quiz />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
					<Footer />
				</Wrapper>
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default App
