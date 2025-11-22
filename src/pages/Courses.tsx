import { useState, useEffect } from 'react'
import './Courses.css'

interface Course {
  nomi: string
  description: string
}

const Courses = () => {
  const [courses] = useState<Course[]>([
    {
      nomi: 'Python Dasturlash Tili',
      description:
        'Python dasturlash tilini boshidan o\'rganing. Syntax, operatorlar va amaliy mashqlar bilan mustahkamlang.',
    },
    {
      nomi: 'Web Dasturlash (HTML, CSS, JS)',
      description:
        'Internet saytlarini yaratish asoslari. Frontend texnologiyalarini o\'rganib, o\'zingizning web loyihangizni yarating.',
    },
    {
      nomi: 'Ma\'lumotlar Tahlili (Data Science)',
      description:
        'Data Science asoslari, ma\'lumotlarni tozalash, tahlil qilish va vizualizatsiya qilishni o\'rganing.',
    },
    {
      nomi: 'Sun\'iy Intellektga Kirish',
      description:
        'AI asoslari va mashina o\'rganish modellarini yaratishni o\'rganing.',
    },
    {
      nomi: 'Mobil Ilovalar Dasturlash',
      description:
        'Android va iOS uchun mobil ilovalar yaratishni o\'rganing, Flutter va React Native bilan tanishing.',
    },
    {
      nomi: 'Kiberxavfsizlik Asoslari',
      description:
        'Internet xavfsizligi, tarmoqlarni himoya qilish va kiberhujumlardan himoyalanish usullari.',
    },
    {
      nomi: 'React va TypeScript',
      description:
        'Zamonaviy frontend dasturlash. React va TypeScript bilan professional ilovalar yarating.',
    },
    {
      nomi: 'Node.js va Backend Dasturlash',
      description:
        'Server tomon dasturlash, REST API yaratish va ma\'lumotlar bazasi bilan ishlash.',
    },
  ])

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCourseClick = (courseName: string) => {
    alert(`${courseName} kursi haqida batafsil ma'lumotlar tez orada e'lon qilinadi.`)
  }

  return (
    <div className="courses-page">
      <section className="courses-hero">
        <div className="container">
          <h1 className="page-title">Online Kurslar Ro'yhati</h1>
          <p className="page-subtitle">
            Barcha kurslar bepul! Siz uchun eng sifatli va zamonaviy bilimlar
            bepul
          </p>
        </div>
      </section>

      <section className="courses-content">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`course-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCourseClick(course.nomi)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleCourseClick(course.nomi)
                  }
                }}
                aria-label={`${course.nomi} kursi`}
              >
                <div className="course-card-header">
                  <div className="course-icon">📚</div>
                  <div className="course-price">Free</div>
                </div>
                <h2 className="course-title">{course.nomi}</h2>
                <p className="course-description">{course.description}</p>
                <button className="course-button" aria-label="Batafsil ma'lumot">
                  Batafsil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses

