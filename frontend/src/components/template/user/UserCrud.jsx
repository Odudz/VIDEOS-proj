import React, {Component} from "react";
import Main from '../template/Main';
import './UserCrud.css';
import axios from 'axios';
import {Navigate} from 'react-rooter-dom';

const headerProps ={
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir! '
};

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: {name: '', email: ''},
    list: []
};
