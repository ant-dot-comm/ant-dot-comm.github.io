import classNames from "classnames"

export function ColorToken(props) {
  const {
    className,
    colorData,
  } = props

  const colorSwatchClasses = classNames(
    className, 
    "color-token",
  )

  const nameDashed = colorData.name.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase());
 
  let name = ''
  if (nameDashed.match('-light')) {
    name = "Light"
  } else if (nameDashed.match('-medium')) {
    name = "Medium"
  } else {
    name = "Dark"
  }

  return (
    <div className={colorSwatchClasses} style={{ backgroundColor: colorData.color}}>
      <div className="font-bold">{name}</div>
      <div>{colorData.color.toUpperCase()}</div>
    </div>
  );

}