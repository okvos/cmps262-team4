import "bulma/css/bulma.css";
import Navigation from "./components/Navigation";
import { util } from "./components/Util";

export function ViewManager({ view }) {
  let View = view; // components need to be capitalized
  return (
    <section className="section">
      {view.__TITLE__ && <h1 className="title">{view.__TITLE__}</h1>}
      <div className="box">
        <View />
      </div>
    </section>
  );
}

function App() {
  // check for username to see if we're logged in, and then set it in Util
  let username = window.localStorage.getItem("username");
  util.username = username;
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
