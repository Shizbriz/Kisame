import './App.css';
import React from 'react';


let Nav =()=>
<div className="nav">
<div className="left">
<a href="#home">Home</a>
</div>
 <form className="searchbar">
   <input type="text" placeholder=" Search ..."></input>
   <button className="btn" type="submit">Search </button>
 </form>
 <div className="right">
<a href="#home">Home</a>
</div>
</div>

class Profiles extends React.Component{
constructor(props){
  super(props);
  this.state={
    error: null,
    isLoaded: false,
    records: []
  };
}
  
componentDidMount(){
  fetch("https://api.enye.tech/v1/challenge/records")
  .then(response=>{
 return  response.json()})
  .then(
    (result)=> {
      console.log(result)
      this.setState({
        isLoaded: true,
        records: result.records
      });
    },
    (error)=>{
      console.log(error)
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
}

render(){
  const {error, isLoaded, records} = this.state;
  if (error){
    return <div> Error </div>;
  } 
  else if(!isLoaded){
    return <div>Loading. . . </div>;
  }
  else {
    return(
      <div className="profiles">
 
        {
          records.profiles.map(record=> (<ul key={record.index}>
          <li className="name"> {record.FirstName} {record.LastName}</li>
          <hr></hr>
          <li> <b>Gender:</b> {record.Gender} </li>
          <li> <b>Location:</b> {record.Latitude}, {record.Latitude} </li>
       
        </ul>
        ))
        }
      
      </div>
     
    );
  }
}
}













function App() {
  return (
    <div className="App">
    <Nav />
    <div className="container">
    <Profiles />
    </div>
    </div>
  );
}

export default App;
