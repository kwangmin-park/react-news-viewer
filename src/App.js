import './App.css';
import axios from "axios";
import React, {useState} from "react";
import NewsList from "./componenets/NewsList";
import Categories from "./componenets/Categories";

function App() {
    return (
        <>
            <Categories/>
            <NewsList/>
        </>
    );
}

export default App;
