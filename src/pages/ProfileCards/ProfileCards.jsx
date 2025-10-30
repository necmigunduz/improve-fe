import React from "react";
import ProfileCard from "../../components/ProfileCards/profileCard.jsx";

function ProfileCards({ n = 10 }) {
    const list = [
        { firstName: "John", lastName: "Doe", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1" },
        { firstName: "Jane", lastName: "Smith", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2" },
        { firstName: "Alice", lastName: "Johnson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3" },
        { firstName: "Bob", lastName: "Brown", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4" },
        { firstName: "Charlie", lastName: "Davis", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=5" },
        { firstName: "Diana", lastName: "Wilson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=6" },
        { firstName: "Ethan", lastName: "Moore", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=7" },
        { firstName: "Fiona", lastName: "Taylor", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=8" },
        { firstName: "George", lastName: "Anderson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=9" },
        { firstName: "Hannah", lastName: "Thomas", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=10" },
        { firstName: "Ian", lastName: "Jackson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=11" },
        { firstName: "Julia", lastName: "White", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=12" },
        { firstName: "Kevin", lastName: "Harris", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=13" },
        { firstName: "Laura", lastName: "Martin", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=14" },
        { firstName: "Michael", lastName: "Garcia", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=15" },
        { firstName: "Nancy", lastName: "Martinez", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=16" },
        { firstName: "Oliver", lastName: "Robinson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=17" },
        { firstName: "Patricia", lastName: "Clark", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=18" },
        { firstName: "Quinn", lastName: "Rodriguez", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=19" },
        { firstName: "Rachel", lastName: "Lewis", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=20" }
    ];
    
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    
    return shuffled.slice(0, n).map((person, index) => (
        <div key={index}>
            <h2>Team Members</h2>
            <p>Person {index + 1}</p>
            <ProfileCard firstName={person.firstName} lastName={person.lastName} image={person.image} />
        </div>
    ));
}

export default ProfileCards;
