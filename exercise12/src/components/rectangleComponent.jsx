import React from 'react'
import { useState } from 'react'

const RectangleComponent = () => {

  const [manageInterval, setManageInterval] = useState(0);
  const [color, setColor] = useState('black');

  let red = 0;
  let green = 0;
  let blue = 0;

  const getColor = () => Math.floor(Math.random() * 256)

  function rgbGenerator() {
    red = getColor()
    green = getColor()
    blue = getColor()
    return setColor(`rgb(${red},${green},${blue})`)
  }

  const onChangeColor = () => {
    return setManageInterval(setInterval(rgbGenerator, 500));
  };

  const onStopChangeColor = () => {
    return clearInterval(manageInterval);
  };

  const onClickChangeColor = () => {
    return clearInterval(manageInterval);
  };
  return (
    <div className='Contenedor'>
      <div className='Cuadrado'
           onMouseOver={onChangeColor} 
           onMouseOut= {onStopChangeColor}
           onDoubleClick={onClickChangeColor}
           style={{backgroundColor: color}}>
        <div className='Texto'>
          <p>Open Bootcamp</p>
        </div>
      </div>
      <div className='Color'>{color}</div>
    </div>
  )
}

export default RectangleComponent