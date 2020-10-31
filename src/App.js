import React, { useEffect, useState} from 'react';
import Recipie from './Recipie';
import './App.css';

const App = () => {
  const APP_ID = '0806fdcd';
  const APP_KEY = '22dc4369f078ea33d51fcd74adeaca32';

  const [recipies,setRecipies] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  useEffect (() => {
      getRecipes();
  },[query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

    return(
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input type="text" value={search} onChange={updateSearch}/>
          <button type="submit">Search</button>
        </form>
        {recipies.map(recipe =>(
          <Recipie
          key= {recipe.recipe.label}
          title= {recipe.recipe.label} 
          calorie= {recipe.recipe.calories}
          ingridients = {recipe.recipe.ingredients}
          image= {recipe.recipe.image}
          />
        ))}
      </div>
    );
};

export default App;
 