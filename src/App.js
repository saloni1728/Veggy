import logo from './logo.svg';
import './App.css';
import Cards from './component/Cards';
import NavBar from './component/NavBar';
import { useState } from 'react';
import SearchContext from './context/searchContext';
import Layout from './component/Layout';

const App = () => {
  const [searchVeggy, setSearchVeggy] = useState("");
  const value = { searchVeggy, setSearchVeggy }
  return (

    <SearchContext.Provider value={value}>
        <div className="App">
          <Layout>
            <NavBar />
            <Cards />
          </Layout>
        </div>
    </SearchContext.Provider>

  );
}

export default App;
