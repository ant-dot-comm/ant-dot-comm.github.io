import { useContext } from 'react';
import classNames from "classnames"
import SiteContext from "../../SiteContext"


export function ColorToken(props) {
  const {
    className,
    colorData,
  } = props

  const { theme } = useContext(SiteContext)

  const sports = theme === "sports"
  const batman = theme === "batman"

  const colorSwatchClasses = classNames(
    className, 
    "color-token",
  )

  const nameDashed = colorData.name.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase());
 
  let name = ''
  if (sports) {
    name = nameDashed.replace('color-sports-','').replace('-medium','')
  } else if (batman) {
    name = nameDashed.replace('color-batman-','').replace('-medium','')
  } else {
    name = nameDashed.replace('color-developer-','').replace('-medium','')
  }

  return (
    <div className={colorSwatchClasses} style={{ backgroundColor: colorData.color}}>
      <div className="font-bold">{name}</div>
      <div>{colorData.color}</div>
    </div>
  );

}