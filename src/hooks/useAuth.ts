import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase'; // Importe a instância de autenticação do Firebase

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Função para logar com e-mail e senha
  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  // Função para criar uma nova conta
  const signup = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  // Função para fazer logout
  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  useEffect(() => {
    // Adicionar um observador para o estado de autenticação do usuário
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Limpar o observador ao desmontar o componente
    return () => unsubscribe();
  }, []);

  return {
    user,
    login,
    signup,
    logout,
  };
};

export default useAuth;
