import { Profile } from './profile/profile';

function App() {
  const users = [
    { id: 1, fullName: 'younes', bio: 'freelancer', profession: 'web design', image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, fullName: 'mohamed', bio: 'unv student', profession: 'cyber security', image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, fullName: 'khaled', bio: 'job seeker', profession: 'computer science', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ]
  return (
    <div className="App" style={{display:'flex',justifyContent:'space-around'}}>
      {users.map((user) => {
        return (
          <Profile
            key={user.id}
            fullName={user.fullName}
            bio={user.bio}
            profession={user.profession}>
            {user.image}
          </Profile>
        )
      })}
    </div>
  );
}

export default App;
