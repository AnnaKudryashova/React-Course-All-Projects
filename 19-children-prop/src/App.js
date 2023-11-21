import './App.css';
import Wrapper from './components/Wrapper';
function App() {
    return (
        <div className="App">
            <Wrapper color="lightblue">
                <h2>Text inside of the Wrapper</h2>
                <button>Click me</button>
            </Wrapper>
            <Wrapper color="lightgreen">
                <h2>Another text</h2>
                <p>some description</p>
                <input type="text" placeholder="Enter value" />
            </Wrapper>
            <Wrapper color="pink">
                <h2>Wrapper child</h2>
                <button>Don't Click me</button>
            </Wrapper>
        </div>
    );
}

export default App;
