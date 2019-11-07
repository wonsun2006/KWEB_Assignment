const axios = require('axios');

axios.get('https://api.github.com/repos/nodejs/node')
.then(resp => console.dir(resp.data))
.catch(err => console.error(err));
// .then(data=>console.log(data.stargazers_count));