import "./pallete.scss";
import classNames from "classnames";

type ColorProps = {
  color: string;
  isActive: boolean;
  onClick(): void;
};

export function Color({ color, isActive, onClick }: ColorProps) {
  const style = {
    ...(isActive ? { borderColor: color } : {}),
  };

  return (
    <li className="pallete__item" style={style} onClick={onClick}>
      <button aria-label={isActive ? "Selected" : "Select"} aria-pressed={isActive} className="pallete__color" style={{ backgroundColor: color }} />
    </li>
  );
}

type PalleteProps = {
  colors: string[];
  className: string;
  activeIndex: number;
  onSelect(index: number): void;
};

export function Pallete({ colors, className, activeIndex, onSelect }: PalleteProps) {
  return (
    <ul className={classNames(className, "pallete")}>
      {colors.map((color, index) => (
        <Color key={color} color={color} isActive={activeIndex === index} onClick={() => onSelect(index)} />
      ))}
    </ul>
  );
}
