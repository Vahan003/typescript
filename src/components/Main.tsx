import React from 'react';
import Card from './Card'
import '../styles/main.style.sass'
interface MainProps {
    cards : Array<any>
}
const Main: React.FC<MainProps> = (props)=>{
    return(
    <div className = "main">
    {
    props.cards.map((el)=> <Card
        key = {JSON.stringify(el)}
        url = {el.url}
        title = {el.title}
        durationTime = {el.durationTime}
        lessonCount = {el.lessonCount}
        />)
       
    }
    </div>
    );
}
export default Main