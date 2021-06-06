import Cookies from 'js-cookie';
import api from '../services/api';

async function visitanteCheck() : Promise<string> {
  let dominio = '';

  if (process.env.NODE_ENV === 'production') {
    dominio = '.boicote.app';
  } else if (process.env.NODE_ENV === 'development') {
    dominio = 'localhost';
  }

  const visitanteId = Cookies.get('visitanteId');

  if (visitanteId === undefined) {
    try {
      const { data } = await api.get('/visitantes/novo-visitante');
      Cookies.set('visitanteId', data, { domain: dominio, expires: 1825 }); // 5 anos
      return data;
    } catch (err) {
      console.error(err);
      return 'error';
    }
  }

  return visitanteId;
}

export default visitanteCheck;
