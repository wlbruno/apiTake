const api = require('./api');
const express = require('express');


const server = express();



server.listen(3000);



server.get('/take/one', async (req, res) => {
    try {
        const { data } = await api.get('api');

        return res.send({ data: data[0] });
    } catch (error) {
        res.send({ error: error.message });
    }
})

server.get('/take/two', async (req, res) => {
    try {
        const { data } = await api.get('api');

        return res.send({ data: data[1] });
    } catch (error) {
        res.send({ error: error.message });
    }
})

server.get('/take/tree', async (req, res) => {
    try {
        const { data } = await api.get('api');

        return res.send({ data: data[2] });
    } catch (error) {
        res.send({ error: error.message });
    }
})


server.get('/take/four', async (req, res) => {
    try {
        const { data } = await api.get('api');

        return res.send({ data: data[3] });
    } catch (error) {
        res.send({ error: error.message });
    }
})

server.get('/take/five', async (req, res) => {
    try {
        const { data } = await api.get('api');

        return res.send({ data: data[4] });
    } catch (error) {
        res.send({ error: error.message });
    }
})

