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

  let colorArray =[]
  for (const property in colors) {
    let obj = {}
    obj.name = `${property}`
    obj.color = `${colors[property]}`
    colorArray.push(obj)
  }

  const currentTheme = theme.charAt(0).toUpperCase() + theme.slice(1);

  const themeColors = colorArray.filter(x => x.name.includes(currentTheme));
  const newColorArray = themeColors.filter(item => !item.name.includes('Font'))

  const colorGroups = newColorArray.reduce((array, item, index) => { 
    const chunkIndex = Math.floor(index/3)
    
    if(!array[chunkIndex]) {
      array[chunkIndex] = []
    }
    
    array[chunkIndex].push(item)
    
    return array
  }, [])   

  return (
    colorGroups.map((group, i) => (
      <div className={colorSwatchGroupClasses} key={i}>
        {group.map((data, i) => (
          <ColorToken className={`color-token-group-item-${i}`} key={i} colorData={data} />
        ))}
      </div>
    ))
  );
}