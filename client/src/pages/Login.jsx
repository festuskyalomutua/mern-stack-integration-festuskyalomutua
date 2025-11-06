import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login, register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(name, email, password);
      } else {
        await login(email, password);
      }
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        {isRegister && <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full border px-3 py-2 rounded" />}
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full border px-3 py-2 rounded" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full border px-3 py-2 rounded" />
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">{isRegister ? 'Register' : 'Login'}</button>
          <button type="button" onClick={()=>setIsRegister(!isRegister)} className="text-sm text-gray-600">{isRegister ? 'Have an account? Login' : 'Create new account'}</button>
        </div>
      </form>
    </div>
  );
}
