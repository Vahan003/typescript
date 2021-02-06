import React,{useState} from 'react';
import ScreenNav from '../components/ScreenNav'
const Tasks : React.FC = () =>{
    const [cliked, setCliked] = useState<string>("popular")
    const onHandle = (event : React.MouseEvent) =>{
        setCliked(event.currentTarget.id)
    }
return(
    <div  className = "screen">
     <ScreenNav 
    title="Tasks" 
    filters = {["Popular","Favorite","New"]}
    onHandle = {onHandle}
    cliked = {cliked}
    />
    </div>
);
}

export default Tasks;