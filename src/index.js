import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserState } from "./context/userContext.js";

ReactDOM.render(
    <UserState>
        <App / >
    </UserState>
    ,document.getElementById('root'));