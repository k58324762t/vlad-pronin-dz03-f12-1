import MainPage from './page/mainpage/MainPage'
import { Users } from './constructror/Users/Users'
const user = [
	{
		name: 'dastan',
		age: 25,
		position: 'front-end',
	},
	{
		name: 'jalia',
		age: 16,
		position: 'sAERF',
	},
	{
		name: 'ruslan',
		age: 17,
		position: 'school',
	},
]

function App() {
	return (
		<>
			<Users user={user} />
			<MainPage />
		</>
	)
}

export default App
