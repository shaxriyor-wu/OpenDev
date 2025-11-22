import './Contacting.css'

interface SeniorDev {
  name: string
  phone: string
  telegram: string
  country: 'uzbek' | 'foreign'
}

const Contacting = () => {
  const seniorDevs: SeniorDev[] = [
    {
      name: 'Rustam Abdurahmonov',
      phone: '+998 90 123 45 67',
      telegram: '@rustam_abd',
      country: 'uzbek',
    },
    {
      name: 'Gulchehra Tursunova',
      phone: '+998 91 234 56 78',
      telegram: '@gulchehra_t',
      country: 'uzbek',
    },
    {
      name: 'Azizbek Xolboyev',
      phone: '+998 93 345 67 89',
      telegram: '@azizbek_x',
      country: 'uzbek',
    },
    {
      name: 'Nilufar Mirzaeva',
      phone: '+998 99 456 78 90',
      telegram: '@nilufar_m',
      country: 'uzbek',
    },
    {
      name: 'John Smith',
      phone: '+1 555 234 5678',
      telegram: '@john_smith',
      country: 'foreign',
    },
    {
      name: 'Maria Garcia',
      phone: '+34 600 123 456',
      telegram: '@maria_g',
      country: 'foreign',
    },
    {
      name: 'Ahmed Khan',
      phone: '+44 7700 900123',
      telegram: '@ahmed_khan',
      country: 'foreign',
    },
  ]

  const uzbekDevs = seniorDevs.filter((dev) => dev.country === 'uzbek')
  const foreignDevs = seniorDevs.filter((dev) => dev.country === 'foreign')

  return (
    <div className="contacting-page">
      <section className="contacting-hero">
        <div className="container">
          <h1 className="page-title">Contacting with SeniorDevs</h1>
          <p className="page-subtitle">
            Senior dasturchilar bilan bog'laning va bilim almashing
          </p>
        </div>
      </section>

      <section className="contacting-content">
        <div className="container">
          {uzbekDevs.length > 0 && (
            <div className="devs-section">
              <h2 className="section-heading">
                <span className="flag-icon">🇺🇿</span> O'zbek Seniorlar
              </h2>
              <div className="devs-grid">
                {uzbekDevs.map((dev, index) => (
                  <div key={index} className="dev-card">
                    <div className="dev-avatar">
                      {dev.name.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="dev-name">{dev.name}</h3>
                    <div className="dev-info">
                      <div className="info-item">
                        <span className="info-icon">📞</span>
                        <span>{dev.phone}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">✈️</span>
                        <a
                          href={`https://t.me/${dev.telegram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="telegram-link"
                        >
                          {dev.telegram}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {foreignDevs.length > 0 && (
            <div className="devs-section">
              <h2 className="section-heading">
                <span className="flag-icon">🌍</span> Xorijiy Seniorlar
              </h2>
              <div className="devs-grid">
                {foreignDevs.map((dev, index) => (
                  <div key={index} className="dev-card">
                    <div className="dev-avatar">
                      {dev.name.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="dev-name">{dev.name}</h3>
                    <div className="dev-info">
                      <div className="info-item">
                        <span className="info-icon">📞</span>
                        <span>{dev.phone}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">✈️</span>
                        <a
                          href={`https://t.me/${dev.telegram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="telegram-link"
                        >
                          {dev.telegram}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Contacting

