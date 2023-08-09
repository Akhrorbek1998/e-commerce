import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, ProductDetails } from "./pages";
import { Footer, Header, Sidebar } from "./components";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
