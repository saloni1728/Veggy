import NavBar from "../component/NavBar";
import { useSelector } from "react-redux";
const Cart=()=>{
    const result=useSelector(x=>x);
    const cartItem=result.cartItemsAdd
    let totalAmount=0,totalItem=0;
    cartItem.map((items)=>{
        totalItem=totalItem+items.count;
        totalAmount=totalAmount+items.count*items.price;
    })
    console.log(cartItem);
    console.log(totalAmount);
    console.log(totalItem);
    return (
        <div className="container">
            <NavBar/>
            <div className="card mt-5">
                <div className="card-body">
                <p className="card-text ">Total No of Items : {totalItem}</p>
                <p className="card-text ">Total Amount : Rs. {totalAmount}</p>
                <p className="card-text ">{}</p>
                </div>
            </div>
        </div>

    );
};
export default Cart;