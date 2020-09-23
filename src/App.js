import React from 'react';
// import Potato from './Potato';

function Food({ fav }) {
  return <div>
    <h3>I Like {fav}</h3>
  </div>
}
// const foodILike = ['kimchi', 'butter chicken', 'burger'];
const someFood = [
  {
    name:"f1",
    type:'nonveg'
  },
  {
    name: "f2",
    type: "veg"
  }
];

function App() {
  return (
    <div className="App">
      {someFood.map(dish => <Food name={dish.name} />
        )}
    </div>
  );
}

export default App;
