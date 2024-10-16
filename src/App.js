import Header from "./Components/Header";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Adverts from "./Components/Adverts";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Itemsdisplay from "./Components/Itemsdisplay";
import ItemDetails from "./Components/itemDetails";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  }

  return (
    <Router>
      <div className="bg-Snow-600">
        <Header />
        
        <Routes>
          {/* Route for home page with full content */}
          <Route
            path="/"
            element={
              <>
                <Search onSearch={handleSearch} />
                <Adverts />
                <Main />
                <Itemsdisplay />
                <Contact />
              </>
            }
          />

          {/* Route for item details with just header and footer */}
          <Route
            path="/details/:id"
            element={
              <>
                <ItemDetails />
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
