import express from 'express';

import './database/connection';
import Orphanages from './models/Orphanage';

import { getRepository } from 'typeorm';

const app = express();

app.use(express.json());

//Rota = conjunto
//Recurso = usuário
//Metodos HTTP (get, post, put, delete)
//parâmetros

// GET = Buscar uma informação
// POST = Criar uma informação
// PUT = Editando uma informação
// DELETE = Excluir uma informação

//Query Params:
//Route Params:
//Body

app.post('/orphanages', (request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanages = 

    return response.json({message: 'Olá, mundo.'});
});

app.listen(3333);

