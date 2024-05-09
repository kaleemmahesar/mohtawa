import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
