import "./pallete.scss";
import classNames from "classnames";

type ColorProps = {
  color: string;
  active: boolean;
  onClick(): void;
};

export function Color({ color, active, onClick }: ColorProps) {
  const style = {
    ...(active ? { borderColor: color } : {}),
  };

  return (
    <li className="pallete__item" style={style} onClick={onClick}>
      <div className="pallete__color" style={{ backgroundColor: color }} />
    </li>
  );
}

type PalleteProps = {
  colors: string[];
  className: string;
  activeIndex: number;
  onSelect(index): void;
};

export function Pallete({ colors, className, activeIndex, onSelect }: PalleteProps) {
  return (
    <ul className={classNames(className, "pallete")}>
      {colors.map((color, index) => (
        <Color key={color} active={activeIndex === index} color={color} onClick={() => onSelect(index)} />
      ))}
    </ul>
  );
}
