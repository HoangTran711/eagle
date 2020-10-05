import React,{useState} from 'react'
import Team from './Team/Team';
import Sammy from '../../../images/sammy.jpg';
import Kawhi from '../../../images/kawhi.jpg';
import Sandra from '../../../images/sandra.jpg';

function InforTeam() {
    const [people,setPeople] = useState({
        mine:{
            name:"Sammy Filton",
            major:"Stylist",
            imageUrl:Sammy,
            text:"We tend to think of Steam as tools for content developers and tools for producers. We're just always thinking."
        },
        anotherPerson: {
            person1:{
                name:"Kawhi Leonard",
                major:"Creative Director",
                imageUrl:Kawhi,
                text:"We tend to think of Steam as tools for content developers and tools for producers. We're just always thinking."
            },
            person2:{
                name:"Sandra Jackson",
                major:"Art Director",
                imageUrl:Sandra,
                text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanm, totam rem aperiam, eaque."
            }
        }
    })
    return (
        <div className="container-infor-team">
            <div className="smooth-section" id="section2"></div>
            <Team name={people.mine.name} major={people.mine.major} Image={people.mine.imageUrl} text={people.mine.text} person1={people.anotherPerson.person1} person2={people.anotherPerson.person2} setPeople={setPeople} people={people} /> 
        </div>
    )
}

export default InforTeam
