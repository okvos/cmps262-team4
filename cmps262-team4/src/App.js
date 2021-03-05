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
        <div className="posts">
            <div className="post">
                <div className="post-header">TestUser • Feb 24, 2021 at 2:23 PM</div>
                <div className="post-content">Test post 123</div>
            </div>
            <div className="post">
                <div className="post-header">TestUser2 • March 24, 2021 at 2:23 PM</div>
                <div className="post-content">T1232432 qwe est post 123</div>
            </div>
            <div className="post">
                <div className="post-header">252933 • May 24, 2021 at 2:23 PM</div>
                <div className="post-content">T123 est post 123. long content T123 est post 123. long content T123 est post 123. long content T123 est post 123. long content T123 est post 123. long content T123 est post 123. long content </div>
            </div>
        </div>
    </div>
  );
}

export default App;
