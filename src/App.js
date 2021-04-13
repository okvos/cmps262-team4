import "bulma/css/bulma.css";
import Navigation from "./components/Navigation";
import { util } from "./components/Util";
import { useParams } from "react-router";

export function ViewManager({ view }) {
  let params = useParams();
  let View = view; // components need to be capitalized
  return (
    <section className="section">
      {View.__TITLE__ && <h1 className="title">{View.__TITLE__}</h1>}
      <div className="box">
        <View {...params} />
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
