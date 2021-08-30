import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Blogs.css";

function Blogs() {
  const [data, setData] = useState([]);
  const dispatch=useDispatch();
  const [isAddedtoCart,setIsAddedToCart]=useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const addToCarts=(data,event)=>{
    console.log(event);
    dispatch({type:'increment',payload:{id:data.id}});
    isAddedtoCart?setIsAddedToCart(false):setIsAddedToCart(true);

  }
  const removeFromCart =(data)=>{
    dispatch({type:'decrement',payload:{id:data.id}})
    isAddedtoCart?setIsAddedToCart(false):setIsAddedToCart(true);
  }

  return (
    <div className="Blog">
      {data.map((d) => (
        <div className="Blog-card" key={d.id}>
          <div className="Blog-header">
            <h3>{d.name}</h3>
            <h4>{d.email}</h4>
          </div>
          <div className="Blog-container">
            <h4>Address</h4>
            <p>
              {d.address.street},{d.address.suite},{d.address.city},
              {d.address.zipcode}
            </p>
            <h4>Company Name </h4>
            <p>{d.company.name}</p>
              
                      
             <button onClick={(event)=>addToCarts(d,event)}>Add to Carts</button>
             <button onClick={()=>removeFromCart(d)} disabled>Remove From Carts</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
