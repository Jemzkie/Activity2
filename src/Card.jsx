import profilePic from './assets/Shrek.jpg'

function Card() {
    return(
        <>
        <div className="spcont"> 
        </div>
        <div className="card">
            <img className="image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Shrek</h2>
            <p>shrek@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Shrek</h2>
            <p>shrek@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Shrek</h2>
            <p>shrek@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Shrek</h2>
            <p>shrek@gmail.com</p>
        </div>
        <div className="card">
            <img className="image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Shrek</h2>
            <p>shrek@gmail.com</p>
        </div>
        </>
    );
}

export default Card