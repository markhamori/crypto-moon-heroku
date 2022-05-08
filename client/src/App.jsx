import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CoinList } from "./components/CoinList";
import { TopPortfolios } from "./components/TopPortfolios";
import { Testimonial } from "./components/Testimonial";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

import { Coin } from "./components/Coin";

// Additional styles
import "./App.css";

// Layouts
import { HeaderLayout } from "./layouts/Header/HeaderLayout";
import { FooterLayout } from "./layouts/Footer/FooterLayout";
import { MainLayout } from "./layouts/Main/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <HeaderLayout>
          <Header />
          <Hero />
        </HeaderLayout>
        <Routes>
          <Route exact path="/" element={<CoinList />} />
          <Route exact path="/coin/:id" element={<Coin />} />
        </Routes>
        <TopPortfolios />
        <Testimonial />
        <FooterLayout>
          <CTA />
          <Footer />
        </FooterLayout>
      </MainLayout>
    </Router>
  );
}

export default App;
