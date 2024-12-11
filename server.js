require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

console.log(process.env.PIXABAY_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
