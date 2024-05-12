import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
        // AOS.init();
    }, [])
	return (
		<div className="site-container">
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
