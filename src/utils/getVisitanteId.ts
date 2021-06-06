import Cookies from 'cookies';
import { IncomingMessage, ServerResponse } from 'http';

function getVisitanteId(req: IncomingMessage, res: ServerResponse): string {
  const cookies = new Cookies(req, res);

  const visitanteId = cookies.get('visitanteId');

  return visitanteId;
}

export default getVisitanteId;
