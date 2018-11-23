import React from 'react'
import '../../styles/styles.css';
import CreateGame from '../CreateGame/CreateGame';
import JoinGame from '../JoinGame/JoinGame.jsx'
import SignUp from '../Signup/Signup';
import Login from '../Login/Login';

function Home() {
    return (
        <div className="home">
            <div className="login">
                <Login />
            </div>
            <div className="inner-body">
                <h1>trivia brawl</h1>
                <div className="button-menu">
                    <CreateGame />
                    <JoinGame />
                    <SignUp />
                </div>
            </div>
        </div>
    );
}

export default Home;