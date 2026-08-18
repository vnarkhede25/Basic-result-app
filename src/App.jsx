import { useMemo, useState } from 'react'
import './App.css'

const initialSubjects = [
  { name: 'Data Structures', mse: 40, ese: 68 },
  { name: 'Operating Systems', mse: 36, ese: 72 },
  { name: 'Database Management', mse: 42, ese: 75 },
  { name: 'Computer Networks', mse: 38, ese: 70 },
]

const gradeScale = [
  { min: 90, grade: 'O', points: 10 },
  { min: 80, grade: 'A+', points: 9 },
  { min: 70, grade: 'A', points: 8 },
  { min: 60, grade: 'B+', points: 7 },
  { min: 50, grade: 'B', points: 6 },
  { min: 40, grade: 'C', points: 5 },
  { min: 30, grade: 'D', points: 4 },
  { min: 0, grade: 'F', points: 0 },
]

const clampMarks = (value) => Math.min(100, Math.max(0, Number(value) || 0))

function App() {
  const [student, setStudent] = useState({
    name: 'Aarav Sharma',
    registerNo: '20BCE1234',
    semester: 'Semester 5',
  })

  const [subjects, setSubjects] = useState(initialSubjects)

  const subjectResults = useMemo(() => {
    return subjects.map((subject) => {
      const weightedMarks = subject.mse * 0.3 + subject.ese * 0.7
      const gradeInfo = gradeScale.find((entry) => weightedMarks >= entry.min) || gradeScale.at(-1)
      const roundedMarks = Number(weightedMarks.toFixed(2))

      return {
        ...subject,
        weightedMarks: roundedMarks,
        grade: gradeInfo.grade,
        points: gradeInfo.points,
        status: roundedMarks >= 50 ? 'Pass' : 'Fail',
      }
    })
  }, [subjects])

  const totalMarks = subjectResults.reduce((sum, item) => sum + item.weightedMarks, 0)
  const averageMarks = totalMarks / subjectResults.length
  const spi =
    subjectResults.reduce((sum, item) => sum + item.points, 0) / subjectResults.length

  const resultStatus = averageMarks >= 50 ? 'Eligible for promotion' : 'Needs improvement'

  const handleStudentChange = (field, value) => {
    setStudent((previous) => ({ ...previous, [field]: value }))
  }

  const handleSubjectChange = (index, field, value) => {
    setSubjects((previous) =>
      previous.map((subject, subjectIndex) => {
        if (subjectIndex !== index) return subject
        return {
          ...subject,
          [field]: clampMarks(value),
        }
      }),
    )
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">VIT University</p>
          <h1>Semester Result Dashboard</h1>
        </div>
        <div className="student-chip">{student.semester}</div>
      </header>

      <main className="dashboard">
        <section className="student-panel card">
          <h2>Student Details</h2>
          <div className="form-grid">
            <label>
              Student Name
              <input
                type="text"
                value={student.name}
                onChange={(event) => handleStudentChange('name', event.target.value)}
              />
            </label>
            <label>
              Register Number
              <input
                type="text"
                value={student.registerNo}
                onChange={(event) => handleStudentChange('registerNo', event.target.value)}
              />
            </label>
            <label>
              Semester
              <input
                type="text"
                value={student.semester}
                onChange={(event) => handleStudentChange('semester', event.target.value)}
              />
            </label>
          </div>
        </section>

        <section className="summary-panel">
          <div className="stat-card card">
            <span className="label">Average Marks</span>
            <strong>{averageMarks.toFixed(2)}%</strong>
          </div>
          <div className="stat-card card">
            <span className="label">SPI</span>
            <strong>{spi.toFixed(2)}</strong>
          </div>
          <div className="stat-card card status-card">
            <span className="label">Status</span>
            <strong>{resultStatus}</strong>
          </div>
        </section>

        <section className="subject-panel card">
          <div className="section-heading">
            <h2>Subject-wise Marks</h2>
            <span>Weightage: MSE 30% + ESE 70%</span>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>MSE (30%)</th>
                  <th>ESE (70%)</th>
                  <th>Final</th>
                  <th>Grade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {subjectResults.map((subject, index) => (
                  <tr key={subject.name}>
                    <td>{subject.name}</td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={subjects[index].mse}
                        onChange={(event) => handleSubjectChange(index, 'mse', event.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={subjects[index].ese}
                        onChange={(event) => handleSubjectChange(index, 'ese', event.target.value)}
                      />
                    </td>
                    <td>{subject.weightedMarks}</td>
                    <td>
                      <span className="grade-pill">{subject.grade}</span>
                    </td>
                    <td>
                      <span className={subject.status === 'Pass' ? 'success' : 'danger'}>
                        {subject.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
