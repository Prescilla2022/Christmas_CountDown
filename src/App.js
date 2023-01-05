import "./App.css";
import "./styles/countdown.css";
import "./styles/messages.css";
import Countdown from "./components/Countdown";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countdown />

        <Message />
      </header>
    </div>
  );
}

export default App;
