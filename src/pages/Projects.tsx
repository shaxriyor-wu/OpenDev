import { useState } from 'react'
import './Projects.css'

interface ProjectCategory {
  id: string
  name: string
  icon: string
  description: string
  projects: string[]
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories: ProjectCategory[] = [
    {
      id: 'backend',
      name: 'Backend',
      icon: '⚙️',
      description: 'Server tomon kodlash, API yaratish va bazalar bilan ishlash.',
      projects: [
        'REST API yaratish loyihasi',
        'Mikroxizmatlar arxitekturasi ishlab chiqish',
        "Ma'lumotlar bazasi optimizatsiyasi",
        'Server monitoring tizimi',
        'Authentication va Authorization tizimi',
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: '🎨',
      description:
        'Sayt va ilovalarning ko\'rinishi va interaktiv qismlarini yaratish.',
      projects: [
        'Interaktiv veb sayt yaratish',
        'Single Page Application (SPA) loyihasi',
        'Responsiv dizayn va UI komponentlar',
        'Animatsiyalar bilan landing page',
        'Real-time dashboard yaratish',
      ],
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: '🚀',
      description: 'Infra tuzilma, avtomatlashtirish va monitoring.',
      projects: [
        'CI/CD pipeline yaratish',
        'Kubernetes bilan konteyner boshqaruvi',
        'Infra avtomatlashtirish skriptlari',
        'Monitoring va log tahlil qilish',
        'Cloud infrastructure setup',
      ],
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: '📱',
      description: 'Android va iOS ilovalar yaratish.',
      projects: [
        'Flutter ilovasi yaratish',
        'React Native yordamida mobil loyiha',
        'Android ilova testlash va optimallashtirish',
        'iOS uchun UI dizayn',
        'Cross-platform mobil ilova',
      ],
    },
    {
      id: 'datascience',
      name: 'Data Science',
      icon: '📊',
      description: "Ma'lumotlarni tahlil qilish va modellashtirish.",
      projects: [
        "Ma'lumotlar tozalash va vizualizatsiya",
        "Mashina o'rganish modellari yaratish",
        'Data mining loyihasi',
        'Big Data tahlili',
        'Predictive analytics platformasi',
      ],
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: '🔒',
      description: 'Tizimlarni himoya qilish va xavfsizlikni ta\'minlash.',
      projects: [
        'Tarmoqlarni xavfsizligi nazorati',
        'Penetratsion testlash loyihasi',
        'Malware tahlili',
        'Xavfsizlik siyosati ishlab chiqish',
        'Security audit va vulnerability assessment',
      ],
    },
  ]

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId)
  }

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  )

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1 className="page-title">Free Volunteering Projects</h1>
          <p className="page-subtitle">
            Real loyihalarda ishlash orqali tajriba oling va portfolio yarating
          </p>
        </div>
      </section>

      <section className="projects-content">
        <div className="container">
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category-card ${
                  selectedCategory === category.id ? 'active' : ''
                }`}
                onClick={() => handleCategoryClick(category.id)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleCategoryClick(category.id)
                  }
                }}
                aria-label={`${category.name} loyihalari`}
              >
                <div className="category-icon">{category.icon}</div>
                <h2 className="category-name">{category.name}</h2>
                <p className="category-description">{category.description}</p>
              </div>
            ))}
          </div>

          {selectedCategoryData && (
            <div className="projects-list">
              <h2 className="projects-list-title">
                {selectedCategoryData.name} Loyihalari
              </h2>
              <ul className="projects-items">
                {selectedCategoryData.projects.map((project, index) => (
                  <li key={index} className="project-item">
                    <span className="project-icon">✓</span>
                    {project}
                  </li>
                ))}
              </ul>
              <button
                className="close-projects-button"
                onClick={() => setSelectedCategory(null)}
                aria-label="Loyihalar ro'yxatini yopish"
              >
                Yopish
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects

