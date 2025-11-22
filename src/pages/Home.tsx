import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">OpenDev</span> Hamjamiyati
            </h1>
            <p className="hero-subtitle">
              O'zbekiston dasturlash hamjamiyatiga xush kelibsiz! Bepul kurslar,
              loyihalar va bilim almashish platformasi.
            </p>
            <div className="hero-buttons">
              <a href="/courses" className="btn btn-primary">
                Kurslarni Ko'rish
              </a>
              <a href="/projects" className="btn btn-secondary">
                Loyihalar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Nima uchun OpenDev?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Bepul Kurslar</h3>
              <p>
                Sifatli va zamonaviy dasturlash kurslari bepul. Har bir daraja
                uchun materiallar.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Amaliy Loyihalar</h3>
              <p>
                Real loyihalarda ishlash orqali tajriba oling va portfolio
                yarating.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Hamjamiyat</h3>
              <p>
                Senior dasturchilar bilan bog'laning va bilim almashing.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Zamonaviy Texnologiyalar</h3>
              <p>
                Eng so'nggi texnologiyalar va best practice'larni o'rganing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Talabalar</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Kurslar</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Loyihalar</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Mentorlar</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

