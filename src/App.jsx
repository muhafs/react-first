import { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
	const [isDark, setIsDark] = useState(true)

	function toggleMode() {
		setIsDark((prevState) => !prevState)
	}

	const styles = {
		height: '100vh',
		backgroundColor: isDark ? '#282D35' : '#FFFFFF',
	}

	return (
		<div style={styles}>
			<Navbar isDark={isDark} toggle={toggleMode} />
			<Main isDark={isDark} />
		</div>
	)
}

export default App
