import propTypes from 'prop-types'
export const Profile = ({ fullName = "Youcef TALEB", bio = 'unv student', profession = 'web development', children, handleName = () => alert(fullName) }) => {
    return (
        <div style={{ border: '1px solid salmon', display: 'inline-block', padding: '50px 50px', textAlign: 'center' }}>
            <div>
                <img src={children} style={{ maxHeight: 400, maxWidth: 300, border: '1px solid white' }} />
            </div>
            <h2>{fullName}</h2>
            <h4>{bio}</h4>
            <h4>{profession}</h4>
            <button onClick={handleName} style={{ border: 'none', padding: '10px 20px', borderRadius: '7px', backgroundColor: 'salmon', color: 'white' }}>
                click me!
            </button>
        </div>
    );
}
Profile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    children: propTypes.string,
    handleName: propTypes.func
}