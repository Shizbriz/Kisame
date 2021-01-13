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
  .then(response => response.json())
  .then(
    (result)=> {
      this.setState({
        isLoaded: true,
        records: result.records
      });
    },
    (error)=>{
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
      <ul>
        {
          records.map(record=> (<li key={record.index}>
      {record.records} {record.status} {record.size}
        </li>
        ))
        }
      </ul>
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
