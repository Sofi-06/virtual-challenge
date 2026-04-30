import studentImg1 from '../../assets/Home_estu1.png'
import studentImg2 from '../../assets/Home_estu2.png'
import './information.css'

function GeneralInformation() {
	return (
		<>
			{/* ¿Qué es el Virtual Challenge? */}
			<section className="information-section">
				<div className="information-section__inner">
					<div className="information-section__content">
						<h1 className="information-section__title">
							¿Qué es el Virtual Challenge?
						</h1>
						<p className="information-section__text">
							Es un concurso orientado a los docentes universitarios, que busca incentivar la creación de recursos educativos digitales, y las estrategias de enseñanza innovadoras con uso de TIC en el aula. Este año en su <span className="information-section__text--bold">VII versión</span> los invitamos a explorar su creatividad <span className="information-section__text--bold">Aquí y Ahora</span>, desarrollando al máximo su nivel de creatividad e innovación.
						</p>
					</div>
					<div className="information-section__image">
						<img src={studentImg1} alt="Estudiante Virtual Challenge" />
					</div>
				</div>
			</section>

			{/* ¿Cuál es el objetivo? */}
			<section className="objective-section">
				<div className="objective-section__inner">
					<div className="objective-section__image">
						<img src={studentImg2} alt="Objetivo Virtual Challenge" />
					</div>
					<div className="objective-section__content">
						<h2 className="objective-section__title">
							¿Cuál es el objetivo?
						</h2>
						<p className="objective-section__text">
							Promover estrategias que fortalezcan la práctica docente a través de pedagogías innovadoras basadas en recursos educativos digitales que permitan incorporar las TIC, TAC y TEP, en pro de dar cumplimiento a nuestra estrategia <span className="objective-section__text--bold">#AquíYAhora</span> con la U3D y digital, y la formación de alta calidad implementando nuevas tendencias y realidades digitales.
						</p>
					</div>
				</div>
			</section>

			{/* ¿Qué estrategias pedagógicas... */}
			<section className="strategies-header">
				<h2 className="strategies-header__title">
					¿Qué estrategias pedagógicas con uso de TIC se pueden utilizar?
				</h2>
			</section>

			<section className="stages-section">
				<div className="stages-section__inner">
					<div className="stages-section__content">
						<h3 className="stages-section__subtitle">
							Etapas del concurso
						</h3>
						<ol className="stages-section__list">
							<li className="stages-section__item">
								<span className="stages-section__number">Realiza la</span>
								<span className="stages-section__bold">inscripción</span>
								<span className="stages-section__number">por medio del formulario que se encuentra en este sitio.</span>
							</li>
							<li className="stages-section__item">
								<span className="stages-section__bold">Desarrolla</span>
								<span className="stages-section__number">la estrategia de producción intelectual con uso de tecnología educativa.</span>
							</li>
							<li className="stages-section__item">
								<span className="stages-section__number">Implementa con estudiantes, al iniciar el semestre 2025-II.</span>
								<span className="stages-section__bold">Se deben tomar evidencias y testimonios.</span>
							</li>
							<li className="stages-section__item">
								<span className="stages-section__number">Luego debes</span>
								<span className="stages-section__bold">documentar</span>
								<span className="stages-section__number">brevemente las fases de desarrollo.</span>
							</li>
							<li className="stages-section__item">
								<span className="stages-section__number">Para finalizar,</span>
								<span className="stages-section__bold">carga la información</span>
								<span className="stages-section__number">a la plataforma</span>
								<a href="#" className="stages-section__link">virtual</a>
								<span className="stages-section__number">, en el curso que se habilitará para los docentes inscritos.</span>
							</li>
						</ol>
						<a href="#" className="stages-section__cta">Inscríbete</a>
					</div>
					<div className="stages-section__image">
						<img src={studentImg1} alt="Etapas del concurso" />
					</div>
				</div>
			</section>

			{/* ¿Cuáles son los premios? */}
			<section className="prizes-section">
				<div className="prizes-section__inner">
					<h2 className="prizes-section__title">
						¿Cuáles son los premios?
					</h2>
					<p className="prizes-section__subtitle">
						Los premios para la versión Nº 7 del Virtual Challenge, son:
					</p>
					
					<div className="prizes-section__cards">
						<div className="prize-card">
							<div className="prize-card__header">
								<span className="prize-card__label">Primer Lugar</span>
							</div>
							<div className="prize-card__content">
								<div className="prize-card__amount">$ 3'500.000</div>
								<div className="prize-card__text">en efectivo</div>
								<div className="prize-card__logo">Campus Virtual</div>
							</div>
						</div>

						<div className="prize-card">
							<div className="prize-card__header">
								<span className="prize-card__label">Segundo Lugar</span>
							</div>
							<div className="prize-card__content">
								<div className="prize-card__amount">$ 2'500.000</div>
								<div className="prize-card__text">en efectivo</div>
								<div className="prize-card__logo">Campus Virtual</div>
							</div>
						</div>

						<div className="prize-card">
							<div className="prize-card__header">
								<span className="prize-card__label">Tercer Lugar</span>
							</div>
							<div className="prize-card__content">
								<div className="prize-card__amount">$ 2'000.000</div>
								<div className="prize-card__text">en efectivo</div>
								<div className="prize-card__logo">Campus Virtual</div>
							</div>
						</div>
					</div>

					<div className="prizes-section__note">
						<p>
							<span className="prizes-section__note--bold">*Todos</span> los docentes participantes que cumplan con las condiciones del concurso, obtendrán un certificado de participación.
						</p>
					</div>
				</div>
			</section>

			{/* ¿Dónde puedes entregar tu recurso educativo? */}
			<section className="delivery-section">
				<div className="delivery-section__inner">
					<div className="delivery-section__content">
						<h2 className="delivery-section__title">
							¿Dónde puedes entregar tu recurso educativo?
						</h2>
						<p className="delivery-section__text">
							La estrategia se debe compartir por medio de la plataforma virtual, en la actividad denominada "Campus Challenge" que estará disponible en la fecha correspondiente.
						</p>
					</div>
					<div className="delivery-section__image">
						<img src={studentImg1} alt="Entregar recurso educativo" />
					</div>
				</div>
			</section>
		</>
	)
}

export default GeneralInformation
