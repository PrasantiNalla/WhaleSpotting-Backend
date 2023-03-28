import { BackendConnectionChecker } from "./components/BackendConnectionChecker";
import { WhaleSightingDetail } from "./components/WhaleSightingDetail/WhaleSightingDetail"
import { Home } from "./components/Home/Home";
import { SpeciesIdentification } from "./components/SpeciesIdentification/SpeciesIdentification";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navigation/NavBar';
import { WhaleSightingViewer } from './components/WhaleSightingViewer/WhaleSightingViewer';
import { CreateSighting } from "./components/CreateSighting/CreateSighting";
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer';
import './App.scss';
import { LoginContext, LoginManager } from "./components/Login/LoginManager";
import { AdminPage } from "./components/Admin/AdminPage";

function App() {

  return (
		<LoginManager>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/backend-checker" element={<BackendConnectionChecker />} />
				<Route path="/sightings" element={
					<LoginContext.Consumer>
						{value => value.isLoggedIn
							? <WhaleSightingViewer loggedIn = {true}/>
							: <WhaleSightingViewer loggedIn = {false}/>}
					</LoginContext.Consumer>} />
				<Route path="/sightings/submit" element={
					<LoginContext.Consumer>
						{value => value.isLoggedIn
							? <CreateSighting />
							: <Login />}
					</LoginContext.Consumer>} />
        <Route path="/sightings/admin" element={
					<LoginContext.Consumer>
						{value => value.isAdmin
							? <AdminPage />
							: <Login />}
					</LoginContext.Consumer>} />
				<Route path="/sightings/:id" element={<WhaleSightingDetail />} />
				<Route path="/whale/species-identification" element={<SpeciesIdentification />} />
			</Routes>
			<Footer />
		</LoginManager>
	)
}
export default App
