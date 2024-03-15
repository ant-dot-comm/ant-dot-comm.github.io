import {useContext} from "react"
import classNames from "classnames"
import * as colors from "../../js/colors"

import { ColorToken } from "./ColorToken";
import SiteContext from "../../SiteContext"


export function ColorTokenGroup(props) {
  const {
    className,
  } = props

  const { theme } = useContext(SiteContext);

  const colorSwatchGroupClasses = classNames(
    className, 
    "color-token-group", 
  )

  let colorsName = []
  if (theme === "batman") {
    colorsName = ["Bulletproof Yellow", "Gotham Blue", "Joker Green", "Turbines Orange"]
  } else if (theme === "sports") {
    colorsName = ["Vikings Purple", "Rosso Corsa", "Timberwolves Blue", "24"]
  } else {
    colorsName = ["Buckeyes Scarlet", "Hotwheels Orange", "Mercedes Livery Green", "Minnesota Purple"]
  }

  let colorArray =[]
  for (const property in colors) {
    let obj = {}
    obj.name = `${property}`
    obj.color = `${colors[property]}`
    colorArray.push(obj)
  }

  const currentTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
  // find colors that include theme name 
  const themeColors = colorArray.filter(x => x.name.includes(currentTheme)); 
  // exclude the font colors
  const newColorArray = themeColors.filter(item => !item.name.includes('Font')) 
  // create arrays in groups of 3
  const colorGroups = newColorArray.reduce((array, item, index) => { 
    const chunkIndex = Math.floor(index/3)
    if(!array[chunkIndex]) {
      array[chunkIndex] = []
    }
    array[chunkIndex].push(item)
    return array
  }, [])   

  return (
    colorsName.map((colorName, i) => (
      <div className={colorSwatchGroupClasses}>
        <div key={i} className="color-token-group-name mb">{colorName}</div>
        <div className="color-token-group-item-container">
          {colorGroups[i].map((data, i) => (
            <ColorToken className={`color-token-group-item-${i}`} key={i} colorData={data} /> 
          ))}
        </div>
      </div>
    ))
  );
}