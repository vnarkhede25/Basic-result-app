## Aim

This project is designed to help VIT students calculate and view their semester result in a simple, responsive, and user-friendly web application. The system includes four subjects and calculates the final score using the required formula:

- MSE Marks: 30%
- ESE Marks: 70%
- Final Score = (MSE × 30%) + (ESE × 70%)

The website also displays the overall grade, average percentage, SPI, and pass/fail status for each subject.

---

## VIT Semester Result Dashboard

A clean and responsive result management website built with React and Vite for academic result preparation.

### Features

- Student details form
- Four course subjects
- MSE and ESE mark entry
- Automatic final marks calculation
- Grade classification
- Subject-wise pass/fail status
- Average marks and SPI summary
- Fully responsive design for desktop, tablet, and mobile devices

---

## Tech Stack

### Frontend
- React 19
- Vite 8
- JavaScript
- CSS3

### Tools Used
- Node.js
- npm
- Git

---

## Requirements

Before running this project, ensure the following are installed:

- Node.js 18 or later
- npm 9 or later
- Git
- A modern browser such as Chrome, Edge, or Firefox

---

## Versions

- React: 19.2.8
- React DOM: 19.2.8
- Vite: 8.2.1
- npm: latest stable version
- Node.js: 18+

---

## Project Structure

```bash
vit-result-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation and Run

1. Open the terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev -- --host 0.0.0.0 --port 4173
```

4. Open the browser and visit:

```text
http://localhost:4173/
```

---

## Screenshots
<img width="1016" height="503" alt="image" src="https://github.com/user-attachments/assets/0cc42a37-0608-4beb-8132-ed5a98ef2c7f" />
<img width="1021" height="507" alt="image" src="https://github.com/user-attachments/assets/1c836098-b138-4b75-a5cb-bd2c171fbff6" />

---

## Result Formula

```text
Final Marks = (MSE × 0.30) + (ESE × 0.70)
```

Example:

```text
MSE = 40
ESE = 68
Final = (40 × 0.30) + (68 × 0.70)
      = 12 + 47.6
      = 59.6
```
## Note

This project is created for educational and academic demonstration purposes. It can be extended with backend integration, database storage, and PDF report generation in future versions.
