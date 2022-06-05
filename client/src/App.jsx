import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import { Aside } from "./components/Aside";
import { Welcome } from "./components/Welcome";
import { CoinList } from "./components/CoinList";
import { Coin } from "./components/Coin";
import { Exchanges } from "./components/Exchanges";
import { TopPortfolios } from "./components/TopPortfolios";
import { Information } from "./components/Information";

function App() {
  return (
    <Router>
      <div className="flex flex-row">
        <Aside />
        <main className="flex flex-row flex-grow">
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/coin-list" element={<CoinList />} />
            <Route exact path="/coin-list/coin/:id" element={<Coin />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route exact path="/top-portfolios" element={<TopPortfolios />} />
            <Route exact path="/information" element={<Information />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
