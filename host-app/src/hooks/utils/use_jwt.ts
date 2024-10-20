import { useState, useEffect } from 'react';
import { jwtDecode, JwtPayload } from 'jwt-decode';

/**
 * Hook para decodificar un token JWT.
 * @param {string} token El token JWT a decodificar.
 * @returns {object|null} Los datos decodificados del token o null si es inválido.
 */
const useJwtDecode = <T extends JwtPayload>(token: string) => {
  const [decodedToken, setDecodedToken] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setDecodedToken(null);
      setError("Token no proporcionado");
      return;
    }

    try {
      const decoded: T = jwtDecode<T>(token);
      console.log(decoded);
      setDecodedToken(decoded);
      setError(null); // Resetear el error si la decodificación fue exitosa
    } catch (err) {
      console.error("Error al decodificar el token:", err);
      setDecodedToken(null);
      setError("Error al decodificar el token. El formato puede ser inválido.");
    }
  }, [token]);

  return { decodedToken, error };
};

export default useJwtDecode;
