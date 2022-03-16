import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" exact element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>

  );
}

export default App;


