import React from 'react';
import {ReactComponent as Line} from "../icon/line.svg"

interface IconButtonProps{
    active: string,
    _id: string,
    onHandler(event : React.MouseEvent): void
}
const IconButton: React.FC<IconButtonProps> = (props) =>{
  return(
      <li id = {props._id} className = {`sectionIco ${props.active?? ""}`} onClick = {props.onHandler}>
          <Line className = "line"/>
          {props.children}
      </li>
  );
}

export default IconButton;