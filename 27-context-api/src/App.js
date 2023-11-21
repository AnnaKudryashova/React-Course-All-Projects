import { useState } from 'react';
import UserContext from './context/UserContext';
import './App.css';
import MyUser from './components/MyUser';
import ChangeUser from './components/ChangeUser';

function App() {
    const [user, setUser] = useState('Mike');
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div className="App">
                <MyUser />
                <ChangeUser />
            </div>
        </UserContext.Provider>
    );
}

export default App;
