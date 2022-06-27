import "./App.css";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="columns is-flex-direction-column is-fullheight-100vh">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
