import React from 'react';
import {ReactComponent as Play} from '../icon/play.svg'
import '../styles/card.style.sass'
interface CardProps{
    url: string,
    title: string,
    durationTime: string,
    lessonCount:string
}
const Card: React.FC<CardProps> = (props) => {
    return (
        <div className="card" style = {{backgroundImage: `url('${props.url}')`}}>
            <div className="card-header">
            <div className = "title">{props.title}</div>
            <div className = "dur-time">{props.durationTime}</div>
            </div>
            <span className="card-lesson-count">{props.lessonCount}</span>
            <div className = "play-button">
                <Play className = "play"/>
            </div>
        </div>
    );
}
export default Card