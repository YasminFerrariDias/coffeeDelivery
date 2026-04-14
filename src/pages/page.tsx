'use client';

import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth";

export default function Page() {
  const { user, login, logout } = useAuth();

  const { handleSubmit, register} = useForm<{ name: string }>();

  const handleLogin = ({ name }: {name: string}) => {
    const userForm = {
      name,
      token: 'token'
    };

    login(userForm);
  }

  return (
    <>
      <h2>Context</h2>

      <p>{user?.name}</p>

      <form onSubmit={handleSubmit(handleLogin)}>
        <input type="text" placeholder="Informe seu nome:" {...register('name')} />
        <button type='submit'>Entrar</button>
      </form>

      <button onClick={logout}>Click</button>
    </>
  )
}
