import { veggyData } from "../data/Content";
import { useContext, useState } from "react";
import SearchContext from "../context/searchContext";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../state/Actions";
import { useSelector } from "react-redux";
const Cards = (props) => {
    const dispatch = useDispatch();
    const result=useSelector(x=>x);
    const [veggyCount, setVeggyCount] = useState(1);
    return (
        <div className="card m-3 align-items-center" style={{ width: "20%", height: "20%" }}>
            <img className="card-img-top" src={props.image} alt="..." />
            <div className="card-body">
                <p className="card-text m-1">{props.name}</p>
                <p className="card-text m-1">Rs. {props.price}</p>
                <div className="d-flex flex-row mt-2" style={{ marginLeft: "20%" }}>
                    <img
                        src="https://icons-for-free.com/iconfiles/png/512/remove+icon-1320184982863027796.png"
                        alt="..."
                        className="btn"
                        style={{ width: "35%", height: "35%" }}
                        onClick={e => {
                            if (veggyCount <= 1)
                                setVeggyCount(1)
                            else{
                                setVeggyCount(veggyCount - 1);
                            }
                        }} />
                    <div className="mt-1">{veggyCount}</div>
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-1024.png"
                        alt="..."
                        className="btn"
                        style={{ width: "35%", height: "35%" }}
                        onClick={e => { setVeggyCount(veggyCount + 1) }} />
                </div>
                <button className="btn btn-success btn-md btn-block mt-1"
                    onClick={e => {
                        const obj={...props,count:veggyCount}
                        result.cartItemsAdd.map((items)=>{
                            if(items.name==obj.name){
                                dispatch(removeCart(items));
                            }
                        })
                        dispatch(addCart(obj));
                    }}
                >Add to cart</button>
            </div>
        </div>
    );
};
const Main = () => {
    const { searchVeggy } = useContext(SearchContext);
    return (
        <div className="container">
            <div className="container d-flex flex-wrap justify-content-center">
                {
                    veggyData.map((items) => {
                        let nameVeggy = items.name;
                        if (nameVeggy.includes(searchVeggy)) {
                            return <Cards image={items.image}
                                price={items.price}
                                name={items.name}
                            />
                        }
                        else if (searchVeggy == '') {
                            return <Cards image={items.image}
                                price={items.price}
                                name={items.name}
                            />
                        }
                    })}
            </div>
        </div>
    );
};
export default Main;