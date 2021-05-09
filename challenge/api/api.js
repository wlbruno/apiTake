const axios = require("axios");

const api = axios.create({
    baseURL: 'https://api.github.com/orgs/takenet/repos?&per_page=5&language=C#&sort=created&direction=des?clu=ient_id=a226283f031cc64a318f&cliente_secret=89b16ce1611f7266de92d255ef054f231b01e9ff'
});

module.exports = api;