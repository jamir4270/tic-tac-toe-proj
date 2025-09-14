import "./Tile.css";

type TileProps = {
  isSelected: boolean;
  turn: string;
  onCardClick(turn: string): void;
};

function Tile({ isSelected, turn, onCardClick }: TileProps) {
  const classes = `card ${isSelected ? "selected" : ""}`;
  return (
    <div className={classes} onClick={() => onCardClick(turn)}>
      {turn}
    </div>
  );
}

export default Tile;
