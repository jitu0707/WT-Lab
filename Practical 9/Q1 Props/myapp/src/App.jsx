// App.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemList from "./ItemList";

const App = () => {
  const items = ["React", "JavaScript", "CSS", "HTML"]; // Example items

  return (
    <div>
      {/* Passing title as a prop */}
      <Header title="Welcome to React Props" />
      <main>
        <h2>Here are some topics of the props</h2>
        {/* Passing items array as a prop */}
        <ItemList items={items} />
      </main>
      <Footer author="Rajesh" year={2024} />
    </div>
  );
};

export default App;
