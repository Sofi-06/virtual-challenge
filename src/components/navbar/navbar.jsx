import logo from '../../assets/Identidad-Virtual-Challenge-24.png'
import './navbar.css'

function Navbar() {
	return (
		<header className="site-header">
			<div className="site-header__inner">
				<a className="site-header__brand" href="#top" aria-label="Virtual Challenge">
					<img src={logo} alt="Virtual Challenge" />
				</a>

				<nav className="site-header__nav" aria-label="Navegación principal">
					<a className="nav-link" href="#informacion-general">
						Información General
					</a>
					<a className="nav-link" href="#terminos-y-condiciones">
						Términos y Condiciones
					</a>
					<a className="nav-link" href="#fechas-importantes">
						Fechas Importantes
					</a>
					<a className="nav-link" href="#ediciones-anteriores">
						Ediciones Anteriores
					</a>
				</nav>

				<a className="site-header__cta" href="#inscribete">
					Inscríbete
				</a>
			</div>
		</header>
	)
}

export default Navbar
