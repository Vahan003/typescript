import React from 'react';
import IconButton from './IconButton'
import {ReactComponent as ReactLogo1} from '../icon/ico2.svg'
import {ReactComponent as ReactLogo2} from "../icon/ico.svg"
import {ReactComponent as ReactLogo3} from "../icon/ico1.svg"
import '../styles/side.style.sass'
interface SideProps{
 onHandler(event : React.MouseEvent) : void,
 cliked : string
}


 const Side : React.FC<SideProps> =  (props) =>{
        return(
            <nav className="side">
                <ul className="nav">
                    <IconButton _id ="courses" active = {props.cliked === "courses" ? "active" : "" } onHandler={props.onHandler}>
                    <ReactLogo1 className = "ico"  />
                    </IconButton>
                    <IconButton _id ="tasks" active = {props.cliked === "tasks" ? "active" : "" } onHandler={props.onHandler} >
                    <ReactLogo2 className = "ico"  />
                    </IconButton>
                    <IconButton _id = "mentors" active = {props.cliked === "mentors" ? "active" : "" } onHandler={props.onHandler}>
                    <ReactLogo3 className = "ico"  />
                    </IconButton>
                </ul>                
            </nav>
        );
} 

export default Side;