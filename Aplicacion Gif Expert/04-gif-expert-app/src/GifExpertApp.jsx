import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories(cat=>[...cat, 'Valorant'])
    //console.log(newCategory);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        // onNewCategory={(event) => onAddCategory(event)}
        onNewCategory={(value) => onAddCategory(value)}
        // onNewCategory={onAddCategory}
      />
      {/* <AddCategory />
      <AddCategory /> */}

      {/* Listado de Items o Gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* dentro del listado de Gifs ; Gif Item */}
    </>
  );
};

export default GifExpertApp;
