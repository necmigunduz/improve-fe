import React from "react";
import ProfileCard from "../../components/ProfileCards/profileCard.jsx";
import image1 from '../../assets/necmi.jpg';

function ProfileCards() {
    const list = [
        { firstName: "John", lastName: "Doe", image: image1 },
        { firstName: "Jane", lastName: "Smith" },
        { firstName: "Alice", lastName: "Johnson" },
        { firstName: "Bob", lastName: "Brown" },
        {firstName: "Charlie", lastName: "Davis"}
    ];
    return list.map((person, index) => (
        <div key={index}>
            <h2>Team Members</h2>
            <p>Person {index + 1}</p>
            <ProfileCard firstName={person.firstName} lastName={person.lastName} image={person.image}/>
        </div>
    ));
}

export default ProfileCards;
