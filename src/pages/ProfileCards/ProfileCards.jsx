import React from "react";
import ProfileCard from "../../components/ProfileCards/profileCard.jsx";

function ProfileCards() {
    const list = [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Smith" },
        { firstName: "Alice", lastName: "Johnson" },
        { firstName: "Bob", lastName: "Brown" },
        {firstName: "Charlie", lastName: "Davis"}
    ];
    return list.map((person, index) => (
        <>
            <h2>Team Members</h2>
            <p>Person {index + 1}</p>
            <ProfileCard firstName={person.firstName} lastName={person.lastName} />
        </>
    ));
}

export default ProfileCards;
