import React, { useState } from 'react';
import ScreenNav from '../components/ScreenNav';
import Main from '../components/Main'
const Courses: React.FC = () => {
    const [cliked, setCliked] = useState<string>("popular")
    const onHandle = (event: React.MouseEvent) => {
        setCliked(event.currentTarget.id)
    }
    const cards: Array<any> = [
        {
            url: "/images/banana.png",
            title: "Illustration",
            durationTime: "134 min",
            lessonCount: "24 lessons",
        },
        {
            url: "/images/building.png",
            title: "Graphic design",
            durationTime: "236 min",
            lessonCount: "30 lessons",

        }
    ]
    return (
        <div className="screen">
            <ScreenNav
                title="Courses"
                filters={["Popular", "Favorite", "New"]}
                onHandle={onHandle}
                cliked={cliked}
            />
            <Main cards = {cards}/>
        </div>
    );
}

export default Courses;