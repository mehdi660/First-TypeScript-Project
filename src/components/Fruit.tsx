import { FruitType } from "../typescript/FruitType";

type FruitProps = {
  fruitInfo: FruitType;
  onClick: () => void;
  backgroundColor?: string;
};

export default function Fruit({
  fruitInfo,
  onClick,
  backgroundColor,
}: FruitProps) {
  // state
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  // comportements

  // affichage (render)
  return (
    <li>
      {fruitInfo.nom}{" "}
      <button style={{ background: backgroundColor }} onClick={onClick}>
        X
      </button>
    </li>
  );
}
