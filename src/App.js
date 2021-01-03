import React from 'react'
import './App.css';
import Services from "./Services";
import QuestionAndAnswers from "./QuestionAndAnswers";
import Contacts from "./Contacts";
import MainMenu from "./MainMenu";

function App() {


    return (
        <div className={"main"}>
            <h1>Travel Agency</h1>
            <MainMenu/>
            <Services/>
            <QuestionAndAnswers/>
            <Contacts/>
        </div>
    );
}

export default App;
