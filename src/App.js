import Header from "./Components/Header";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Adverts from "./Components/Adverts";
import Footer from "./Components/Footer";

function App() {
  const handleSearch = (query) => {
    // Process the search query here (e.g., fetch search results)
    console.log(`Searching for: ${query}`);
  }
  return (
    <div className="bg-blue-600">
      <Header />
      {/* <Search onSearch={handleSearch}/> */}
      <Adverts />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
