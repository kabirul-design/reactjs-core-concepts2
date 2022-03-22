import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const products = [
  //   {name : 'Laptop', Price: 3000, color: 'silver'},
  //   {name : 'Asus', Price: 35000, color: 'Black'},
  //   {name : 'Lenovo', Price: 35000, color: 'Gray'},
  //   {name : 'Samsung', Price: 22000, color: 'Black'}
  // ]
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
      {/* <Users></Users> */}

      {/* {
        products.map(product => <Product name={product.name} price={product.Price} color={product.color}></Product>)
      } */}
      {/* <Product name="laptop" price="50000"></Product>
      <Product name="Mobile" price="12000"></Product>
      <Product name="Camera" price="12000"></Product> */}
    </div>  
  );
}

function ExternalUser(){
  const [users, setUsers] = useState(0);
  // useEffect(() =>{},[]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    
  },[]);

  return(
    <div>
      <h3>External User</h3>
      <p>{users.length}</p>
      {
        users.map(user => <></>)
      }
    </div>

  ) 
}
function Users(props){
  return(
   <div>
     <h2>{props.name}</h2>
   </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(7);

//   const increaseCount = () => setCount(count + 1);
//   const decreaseCount = () =>setCount(count - 1);
  
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
//   return(
//     <div>
//       <h3>Count : {count} </h3>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

// function Product(props){
//   return(
//     <div className='products'>
//       <h3>Name : {props.name}  </h3>
//       <p>Price: {props.price} </p>
//       <p>Color : {props.color}</p>
//     </div>
//   )
// }
export default App;
