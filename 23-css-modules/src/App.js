import Info from './components/Info';
import './App.css';

function App() {
    return (
        <div className="App">
            <Info />
            {/* CSS rule from the Info CSS module doesn't work here */}
            <div className="info">
                <h1>App Component heading</h1>
                <button className="my-button">Click me</button>
            </div>
        </div>
    );
}

export default App;
