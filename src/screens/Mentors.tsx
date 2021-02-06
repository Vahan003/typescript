import React,{useState} from 'react';
import ScreenNav from '../components/ScreenNav'
const Mentors : React.FC = () =>{
    const [cliked, setCliked] = useState<string>("popular")
    const onHandle = (event : React.MouseEvent) =>{
        setCliked(event.currentTarget.id)
    }
return(
    <div  className = "screen">
     <ScreenNav 
    title="Mentors" 
    filters = {["Popular","Favorite","New"]}
    onHandle = {onHandle}
    cliked = {cliked}
    />
    </div>
);
}

export default Mentors;