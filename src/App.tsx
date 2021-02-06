import React, {useState}  from 'react';
//import './app.style.css'
import './styles/app.style.sass'
import Side from './components/Side';
import Courses from './screens/Courses'
import Tasks from './screens/Tasks';
import Mentors from './screens/Mentors';
const App: React.FC = () => {

  const [cliked, setCliked] = useState<string>("courses");

  const onHandler = (event : React.MouseEvent) => {
     setCliked(event.currentTarget.id)
  }
  return (
    <>
    <Side onHandler = {onHandler} cliked = {cliked}/>
    {
    cliked === "courses" && <Courses/>
    } 
     {
    cliked === "tasks" && <Tasks/>
    } 
     {
    cliked === "mentors" && <Mentors/>
    } 
    </>
  );
}

export default App;
