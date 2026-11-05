function ProfileCard({profile}){
    // const initials = profile.name.trim().slice(0,2).join('')
    return(
        <div className="profile-card">
            <h2>{profile.name}</h2>

            <h3>{profile.role}</h3>

            <p>{profile.bio}</p>

            <p>Location: {profile.location}</p>

            <h4>Skills</h4>

            <div className="skills">
                {profile.skills.map((skill, index) => (
                    <span key={index} className="skill">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
export default ProfileCard;