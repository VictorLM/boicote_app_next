import Cookies from 'js-cookie';
import api from '../services/api';

async function visitanteCheck() : Promise<void> {
  let dominio = '';

  if (process.env.NODE_ENV === 'production') {
    dominio = '.boicote.app';
  } else if (process.env.NODE_ENV === 'development') {
    dominio = 'localhost';
  }

  const visitanteId = Cookies.get('visitanteId');

  if (visitanteId === undefined) {
    try {
      const response = await api.get('/visitantes/novo-visitante', { withCredentials: false });
      Cookies.set('visitanteId', response.data, { domain: dominio, expires: 1825 }); // 5 anos
    } catch (err) {
      // TODO?
      // console.error(err);
    }
  }
}

export default visitanteCheck;
