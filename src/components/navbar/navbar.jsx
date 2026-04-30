import logo from '../../assets/Identidad-Virtual-Challenge-24.png'
import './navbar.css'

function Navbar({ currentPage = 'general-information' }) {
	const navItems = [
		{
			href: '#informacion-general',
			label: 'Información General',
			page: 'general-information',
		},
		{
			href: '#terminos-y-condiciones',
			label: 'Términos y Condiciones',
			page: 'terms-and-conditions',
		},
		{
			href: '#fechas-importantes',
			label: 'Fechas Importantes',
			page: 'important-dates',
		},
		{
			href: '#ediciones-anteriores',
			label: 'Ediciones Anteriores',
			page: 'previous-editions',
		},
	]

	return (
		<header className="site-header">
			<div className="site-header__inner">
				<a className="site-header__brand" href="#top" aria-label="Virtual Challenge">
					<img src={logo} alt="Virtual Challenge" />
				</a>

				<nav className="site-header__nav" aria-label="Navegación principal">
					{navItems.map((item) => {
						const isActive = item.page === currentPage

						return (
							<a
								key={item.page}
								className={`nav-link${isActive ? ' nav-link--active' : ''}`}
								href={item.href}
								aria-current={isActive ? 'page' : undefined}
							>
								{item.label}
							</a>
						)
					})}
				</nav>

				<a className="site-header__cta" href="#inscribete">
					Inscríbete
				</a>
			</div>
		</header>
	)
}

export default Navbar
