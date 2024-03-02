import Header from "./Components/Header";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Adverts from "./Components/Adverts";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Itemsdisplay from "./Components/Itemsdisplay";


function App() {
  const handleSearch = (query) => {
    // Process the search query here (e.g., fetch search results)
    console.log(`Searching for: ${query}`);
  }
  return (
    <div className="bg-Snow-600">
      <Header />
      <Search onSearch={handleSearch}/>
      <Adverts />
      <Main />
      <Itemsdisplay />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
