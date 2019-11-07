const axios = require('axios');

(async () => {
    try {
        let resp = await axios.get('https://api.github.com/repos/nodejs/node');
        let count = await resp.data.stargazers_count;
        console.dir(count);
    } catch (err) {
        console.error(err);
    }
})();
