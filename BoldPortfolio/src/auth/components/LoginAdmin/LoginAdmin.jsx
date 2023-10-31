//https://vitejs.dev/guide/assets.html
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './LoginAdminStyle.css'

export function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Enviar a controllerAdmin
    } catch (error) {
      // Error
      console.error(error);
    }
  };

  return (
    <div className='login'>
    <h2 className='titleLogin'>Bold Studio.</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
