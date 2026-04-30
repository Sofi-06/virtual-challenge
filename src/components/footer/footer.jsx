import logo from '../../assets/Logo_Blanco2 (1).png'
import './footer.css'

function Footer() {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner">
				<img
					className="site-footer__logo"
					src={logo}
					alt="Logo Virtual Challenge"
				/>
			</div>
		</footer>
	)
}

export default Footer
