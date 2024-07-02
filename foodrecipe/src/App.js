
import React,{useState} from 'react'
import Products from './Products';
import './App.css';
const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "7cd06341";
  const YOUR_APP_KEY ="d09cf5343560647b9af87d02a2a52e13";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
    console.log(search);
  }
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}

export default App
