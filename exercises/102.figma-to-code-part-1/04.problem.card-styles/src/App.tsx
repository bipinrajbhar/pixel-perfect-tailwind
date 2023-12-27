import image from './assets/sunset-skateboard.jpg'

const user = {
	name: 'Max Stylus',
	registeredIn: 'September 2022',
	profileImage: image,
	notesCount: 5,
}

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center bg-cyan-400 p-6">
			{/* 
				🐨 Style the card — keep the following attributes in mind:
				- width and height
				- rounded corner
				- box shadow

				Don't worry about the stacked cards effect for now.
			*/}
			<div>
				<img src={user.profileImage} className="w-56" />
				<h2>{user.name}</h2>
				<p>Joined in {user.registeredIn}</p>
				<a href="#">View all {user.notesCount} notes</a>
			</div>
		</div>
	)
}
