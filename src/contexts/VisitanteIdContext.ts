import { createContext } from 'react';

type VisitanteIdContextType = {
  visitanteId: string;
}

const VisitanteIdContext = createContext({} as VisitanteIdContextType);

export default VisitanteIdContext;
