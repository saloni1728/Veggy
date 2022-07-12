import React from "react" 

const SearchContext=React.createContext({
    searchVeggy: "",
    setSearchVeggy: ()=>{}
});
export default SearchContext;