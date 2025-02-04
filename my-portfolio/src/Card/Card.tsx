import profile_pic from '../assets/Rias_gremory.jpg';

function Card()
{
    return(
        <div className="card">
            <img className='profile_image' src={profile_pic} alt="profile picture" />
            <h2 className='card_title'>James Tagupa</h2>
            <p className='card_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae facilis ex blanditiis voluptates quaerat excepturi dicta, pariatur vitae accusamus odio harum officiis earum obcaecati error illo in nisi perspiciatis alias.</p>
        </div>
    );
}

export default Card;