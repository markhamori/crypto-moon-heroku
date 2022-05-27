import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
// import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { InfoBar } from "./components/Infobar";

import { Hero } from "./components/Hero";
import { CoinList } from "./components/CoinList";
import { TopPortfolios } from "./components/TopPortfolios";
import { Testimonial } from "./components/Testimonial";
import { CTA } from "./components/CTA";

import { Coin } from "./components/Coin";

import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        {/* <Header /> */}
        <div className="flex flex-row">
          <Aside />
          <InfoBar />
          <Hero />
        </div>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/coin-list" element={<CoinList />} />
          <Route exact path="/coin-list/coin/:id" element={<Coin />} />
          {/* <Route exact path="/exchanges" element={<Exchanges />} /> */}
          <Route exact path="/top-portfolios" element={<TopPortfolios />} />
          <Route exact path="/testimonial" element={<Testimonial />} />
          <Route exact path="/contact" element={<CTA />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
