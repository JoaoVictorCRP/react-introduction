import profilePic from './assets/profile.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="A profile picture" className='card-image'/>
            <h2 className='card-title'>JoaoVictorCRP</h2>
            <p className='card-text'>Amo estudar tecnologia, amo o conhecimento.</p>
        </div>
    );
}

// className is utilized to give an html class to a component, since "class" is a reserved word in jsx/tsx
export default Card;