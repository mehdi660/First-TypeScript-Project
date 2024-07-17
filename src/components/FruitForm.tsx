import { useState } from "react";
import { FruitType } from "../typescript/FruitType";

type FruitFormProps = {
  handleAdd: (fruitAAjouter: FruitType) => void;
};

export default function FruitForm({ handleAdd }: FruitFormProps) {
  // state
  const [nouveauFruit, setNouveauFruit] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    //fruitsCopy.push(fruitAAjouter);
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit..."
        onChange={handleChange}
      />
      <button>Ajouter +</button>
    </form>
  );
}
