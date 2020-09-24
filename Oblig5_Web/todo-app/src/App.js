import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Testing />
      <Click />
    </div>
  );

  function Click() {
    const [clicks, setClicks] = useState(0);

    function handleClick() {
      setClicks(clicks + 1);
    }

    return (
      <>
        <p onClick={handleClick}> {clicks} </p>
      </>
    );
  }

  function something() {
    return true;
  }

  function Testing(props) {
    const [name, setname] = useState();

    function handleOnChange(e) {
      setname(e.target.value);
    }
    const thing = [1, 2, 3, 4, 5];

    return (
      <>
        {thing.length > 3 ? (
          <>
          </>
        ) : (
          <>
          </>
        )}
      </>
    );

    /*const noe = false;
    return (
      <>
        {noe ? (
          <>
            <h2>Hi, this is {name}</h2>
            <input onChange={handleOnChange} value={name}></input>
          </>
        ) : (
          <>
            <h2>Hi, this isnt {name}</h2>
            <input onChange={handleOnChange} value={name}></input>
          </>
        )}
      </>
    );
    */
  }

  class Test extends React.Component {
    render() {
      return <div></div>;
    }
  }
}

export default App;
