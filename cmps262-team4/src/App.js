import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          { /* Todo: replace with <Link> as pages get build */ }
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/create">Create an Account</a>
      </header>
    </div>
  );
}

export default App;
