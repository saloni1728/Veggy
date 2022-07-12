import { useContext } from "react"
import SearchContext from "../context/searchContext"

const Layout=({children})=>{
    const {searchVeggy}=useContext(SearchContext);
    return (
        <div>
            {children}
        </div>
    );
};
export default Layout;