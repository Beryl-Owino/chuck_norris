
import './App.css';
import 'bulma'
import Category from "./components/category.js"
import React from "react";
function App() {
  return (

    <div className="App">
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
                <Category></Category>
            </div>
          </div>

      </section>

    </div>

  );
}

export default App;
