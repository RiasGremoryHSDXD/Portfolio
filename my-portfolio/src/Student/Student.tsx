import default_profile_form from '../assets/default_profile.png';

interface StudentProps
{
    profile?: string;
    name?: string;
    age?: number;
    section?: string;
}


function Student(
    {
        profile = default_profile_form,
        name = "NULL",
        age = 0,
        section = "BSIT-3A"
    }: StudentProps
)
{
    return(
        <div className="card">
            <img src={profile} alt="Profile" className="profile_image" />
            <h2 className="card_title">Student Info</h2>
            <p className="card_text">Student Name: {name}</p>
            <p className="card_text">Age: {age}</p>
            <p className="card_text">Section: {section}</p>
        </div>
    );
}

export default Student;