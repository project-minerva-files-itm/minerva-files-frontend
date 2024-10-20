import { useState, useEffect } from 'react';
import { jwtDecode, JwtPayload } from 'jwt-decode';

/**
 * Hook para decodificar un token JWT.
 * @param {string} token El token JWT a decodificar.
 * @returns {object|null} Los datos decodificados del token o null si es inválido.
 */
const useJwtDecode = (token: string) => {
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
        setDecodedToken(decoded);
      } catch (err) {
        console.log(err);
        setError('Error al decodificar el token');
      }
    }
  }, [token]);

  return { decodedToken, error };
};

export default useJwtDecode;
