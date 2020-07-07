import React from 'react';
import { db } from './config/firebase';
import Wall from './components/Wall';

function App() {
    console.log(db);
    return (
            <Wall/>
    );
}

export default App;
