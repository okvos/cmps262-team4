import 'bulma/css/bulma.css';
import Navigation from "./components/Navigation";
import FeedView from "./components/feed/FeedView";

function ViewManager ({ view }) {
    let View = view; // components need to be capitalized
    return (
        <section className="section">
            {view.__TITLE__ && <h1 className="title">{view.__TITLE__}</h1>}
            <div className="box">
                <View />
            </div>

        </section>
    )
}

function App() {
  return (
    <div className="App">
        <Navigation />
        <ViewManager view={FeedView} />
    </div>
  );
}

export default App;
