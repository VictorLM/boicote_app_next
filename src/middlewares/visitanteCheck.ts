import Cookies from 'cookies';
import { IncomingMessage, ServerResponse } from 'http';
import api from '../services/api';

async function visitanteCheck(req: IncomingMessage, res: ServerResponse) : Promise<string> {
  let domain = '';

  if (process.env.NODE_ENV === 'production') {
    domain = '.boicote.app';
  } else if (process.env.NODE_ENV === 'development') {
    domain = 'localhost';
  }

  const cookies = new Cookies(req, res);

  const visitanteId = cookies.get('visitanteId');

  if (visitanteId === undefined) {
    try {
      const { data } = await api.get('/visitantes/novo-visitante');
      cookies.set('visitanteId', data, {
        domain,
        expires: new Date(Date.now() + 10 * 100 * 60 * 60 * 24 * 3650), // 10 anos
      });
      return data;
    } catch (err) {
      console.error(err);
      return 'error';
    }
  }

  return visitanteId;
}

export default visitanteCheck;
