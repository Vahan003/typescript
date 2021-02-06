import React from 'react';
import { ReactComponent as LineS } from "../icon/line-screen.svg"
import '../styles/screen-nav.style.sass'
interface ScreenNavProps {
    title: string,
    filters: string[],
    cliked: string,
    onHandle(event: React.MouseEvent): void
}
const ScreenNav: React.FC<ScreenNavProps> = (props) => {
    return (
        <div className="screen-nav">
            <div className="title">{props.title}</div>
            <ul className="nav-section">
                {
                    props.filters.map((el, ind) => <li 
                    
                    key={`{el:${el},ind${ind}}`} 
                    className={`screen-li ${props.cliked === el.toLowerCase()? "active": ""}`}
                    >
                        <span 
                        className="screen-li-text"
                        id={el.toLowerCase()} 
                        onClick = {props.onHandle}
                        >{el}</span>
                        <span>
                            <LineS className="line-screen" />
                        </span>
                    </li>)
                }
            </ul>
        </div>
    );
}
export default ScreenNav