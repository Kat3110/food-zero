import './contact-header.scss';


export function ContactHeader() {
  return (
    <section className="contact-header">
      <div className="content">
        <div className="contact-header__text">
          <h1 className="large-title contact-header__title">Get in Touch</h1>
          <p className="heading-five contact-header__subtitle">The freshest ingredients for you every day</p>
        </div>
        <div className="contact-header__date">
          <div className="contact-header__day">
            <p className="heading-five contact-header__onetime">Open Time</p>
            <p className="body-text contact-header__week">Sunday - Friday</p>
          </div>
          <div className="divider"></div>
          <div className="contact-header__list">
            <div className="contact-header__box">
              <span className="body-text contact-header__period">Brunch</span>
              <span className="body-text contact-header__time">11:00–12:00</span>
            </div>
            <div className="contact-header__box">
              <span className="body-text contact-header__period">Lunch</span>
              <span className="body-text contact-header__time">13:00–17:00</span>
            </div>
            <div className="contact-header__box">
              <span className="body-text contact-header__period">Dinner</span>
              <span className="body-text contact-header__time">18:00–20:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}