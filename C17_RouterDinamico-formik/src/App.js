import { useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Error from "./views/Error/Error";
import Login from "./views/Login/FormLogin"
import Protected from "./components/Protected/Protected";
import Card from "./views/Card/Card";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginProps = {
    isLoading,
    setIsLoading,
    setAuthenticated
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login {...loginProps}/>}/>
        <Route element={<Protected authenticated={authenticated}/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/character/:id" element={<Card/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;




















const Documentation = () => {
  return (
    <>
      <h1>Semana 5; React Router Dom!</h1>
      <p>How to Install React Router
      To install React Router, all you have to do is run npm install react-router-dom@6 in your project terminal and then wait for the installation to complete.
      If you are using yarn then use this command: yarn add react-router-dom@6.</p>
      <a href="https://www.freecodecamp.org/news/how-to-use-react-router-version-6/#:~:text=How%20to%20Install%20React%20Router,%2Drouter%2Ddom%406%20." target="e_blank" rel="nonreferrer">Visita aquí para leer más instrucciones</a>
    </>
  )
}