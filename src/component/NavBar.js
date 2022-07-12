import { useContext } from "react";
import SearchContext from "../context/searchContext";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
const NavBar = () => {
    const { searchVeggy, setSearchVeggy } = useContext(SearchContext);
    const result=useSelector(x=>x);
    const cartItem=result.cartItemsAdd;
    let totalAmount=0,totalItem=0;
    cartItem.map((items)=>{
        totalItem=totalItem+items.count;
        totalAmount=totalAmount+items.count*items.price;
    })
    return (
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container space-around">
                <a class="navbar-brand" href="/" style={{ color: "green", marginLeft: "5%" }}><h1>Veggy</h1></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "10%" }}>
                    <form class="form-inline my-2 my-lg-0" >
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={e => {
                                setSearchVeggy(e.target.value)
                            }} />
                    </form>
                </div>
                <div className="d-flex flex-column" style={{ marginLeft: "35%" }}>
                    <span class="badge bg-light " >No of items : {totalItem}</span>
                    <span class="badge bg-light " >Total Amount : {totalAmount}</span>
                </div>
                <Link to="/Cart"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="..." style={{ width: "40%", height: "40%"}} /></Link>
            </div>
        </nav>

    );
}
export default NavBar;