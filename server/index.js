const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
  origin: 'https://candidate-list-viewer.vercel.app' 
}));

const candidates = [
  { id: 1, name: 'Sameer Singh', skills: 'JavaScript, React', experience: 5 },
  { id: 2, name: 'Rahul Gupta', skills: 'Java, Spring', experience: 8 },
  { id: 3, name: 'Arti Sharma', skills: 'Python, Django', experience: 4 },
  { id: 4, name: 'Bhanu Pratap', skills: 'C++, Algorithms', experience: 6 },
  { id: 5, name: 'Dhruv Singhal', skills: 'Go, Microservices', experience: 3 },
  { id: 6, name: 'Prajwal Sharma', skills: 'Ruby, Rails', experience: 7 },
  { id: 7, name: 'Atinder Kumar', skills: 'SQL, Databases', experience: 9 },
  { id: 8, name: 'Ronak Khemka', skills: 'HTML, CSS', experience: 2 },
  { id: 9, name: 'Aditi Singh', skills: 'PHP, Laravel', experience: 4 },
  { id: 10, name: 'Shruti Gupta', skills: 'Kotlin, Android', experience: 5 },
];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
