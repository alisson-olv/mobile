import axios from 'axios';
import React, { useState } from 'react';

interface UserDataProps {
  name: string;
  email: string;
  password: string;
}

export default function useRegisterUser() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const URL_API = process.env.URL_API;

  const register = async (userData: UserDataProps) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${URL_API}/users/signup`, userData);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.message || 'An error occurred');
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
}
