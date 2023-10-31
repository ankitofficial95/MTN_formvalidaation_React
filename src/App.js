import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import RegistrationForm from "./components/registrationForm";
import Login from "./components/login";

const App = () => {
  
  const [showLoginPage, setLoginPage] = useState(false);

  const switchToRegister =()=>{
    setLoginPage(false)
  }

  return (
    <div className="App">
      <Header />
      {showLoginPage ? (
        <Login setRegister={switchToRegister}/>
      ) : (
        <RegistrationForm switchToLogin={() => setLoginPage(true)} />
      )}
      <Footer />
    </div>
  );
};

export default App;
