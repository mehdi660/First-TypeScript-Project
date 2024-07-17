import { FruitType } from "../typescript/FruitType";

type FruitProps = {
  fruitInfo: FruitType;
  onClick: () => void;
};

export default function Fruit({ fruitInfo, onClick }: FruitProps) {
  // state
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  // comportements

  // affichage (render)
  return (
    <li>
      {fruitInfo.nom} <button onClick={onClick}>X</button>
    </li>
  );
}
