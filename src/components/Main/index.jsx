/* eslint-disable react/prop-types */
import './style.css'

export default function Main(props) {
	return (
		<div className={`main ${props.isDark ? 'dark' : 'light'}`}>
			<h1 className={`main-title ${props.isDark ? 'dark' : 'light'}`}>Fun facts about React</h1>

			<ul className={`main-list ${props.isDark ? 'dark' : 'light'}`}>
				<li className={`main-point ${props.isDark ? 'dark' : 'light'}`}>Was first released in 2013</li>
				<li className={`main-point ${props.isDark ? 'dark' : 'light'}`}>Was originally created by Jordan Walke</li>
				<li className={`main-point ${props.isDark ? 'dark' : 'light'}`}>Has well over 100K stars on GitHub</li>
				<li className={`main-point ${props.isDark ? 'dark' : 'light'}`}>Is maintained by Facebook</li>
				<li className={`main-point ${props.isDark ? 'dark' : 'light'}`}>Powers thousands of enterprise apps, including mobile apps</li>
			</ul>
		</div>
	)
}
