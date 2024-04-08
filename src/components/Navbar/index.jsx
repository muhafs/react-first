/* eslint-disable react/prop-types */
import LogoDark from '../../assets/react-logo-dark.png'
import LogoLight from '../../assets/react-logo-light.png'
import './style.css'

export default function Navbar(props) {
	return (
		<nav className={`nav ${props.isDark ? 'dark' : 'light'}`}>
			<div className="logo">
				<img src={props.isDark ? LogoDark : LogoLight} alt="react logo" className="logo-image" />
				<h3 className={`logo-title ${props.isDark ? 'dark' : 'light'}`}>ReactFact</h3>
			</div>

			<h4 className="nav-switch">
				<p className={`light-text ${props.isDark ? 'dark' : 'light'}`}>Light</p>
				<button onClick={props.toggle} className={`switch-box ${props.isDark ? 'dark' : 'light'}`}>
					<div className={`switch-toggle ${props.isDark ? 'dark' : 'light'}`}></div>
				</button>
				<p className={`dark-text ${props.isDark ? 'dark' : 'light'}`}>Dark</p>
			</h4>
		</nav>
	)
}
