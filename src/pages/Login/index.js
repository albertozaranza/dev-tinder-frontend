import React, { useState } from 'react';
import './styles.css';

import api from '~/services/api';

import logo from '~/assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/users', {
      username,
    });

    const { _id } = response.data;

    history.push(`/user/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <input
          placeholder="Digite seu usuário do GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}
