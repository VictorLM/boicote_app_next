// TODO - ADD OPÇÃO DE DESVOTAR - PRIMEIRO LÁ NA API
import React from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

function changeVotoStates(
  votoIsCima: number,
  visitanteVote: number | null,
  setVotoBoicote: React.Dispatch<React.SetStateAction<number>>,
  boicoteVotosCount: number,
  setBoicoteVotosCount: React.Dispatch<React.SetStateAction<number>>,
): void {
  setVotoBoicote(votoIsCima);
  if (visitanteVote === null) {
    setBoicoteVotosCount(votoIsCima ? boicoteVotosCount + 1 : boicoteVotosCount - 1);
  } else {
    setBoicoteVotosCount(votoIsCima ? boicoteVotosCount + 2 : boicoteVotosCount - 2);
  }
}

async function votar(
  boicoteId: string,
  votoIsCima: number,
  visitanteCookie: string, // TODO ??????????????????????????
  visitanteVote: number | null,
  setVotoBoicote: React.Dispatch<React.SetStateAction<number>>,
  boicoteVotosCount: number,
  setBoicoteVotosCount: React.Dispatch<React.SetStateAction<number>>,
): Promise<void> {
  //
  if (visitanteVote === votoIsCima) {
    return;
  }
  try {
    await api.post(`/votos/${boicoteId}`, { cima: votoIsCima }, {
      withCredentials: true,
      // headers: { cookie: visitanteCookie },
    });
    //
    changeVotoStates(
      votoIsCima,
      visitanteVote,
      setVotoBoicote,
      boicoteVotosCount,
      setBoicoteVotosCount,
    );
    //
  } catch (err) {
    //
    console.log(err);
    let errors = [{ message: 'Erro ao processar operação.' }];
    if (err.response) {
      // HOUVE RESPOSTA COM ERROR CODE
      errors = err.response.data ?? errors; // NÃO PEGA ERRO UNIQUE DO SEQUELIZE
    } else if (err.request) {
      // NÃO HOUVE RESPOSTA
      errors = [{ message: 'Nossos servidores não estão respondendo. Tente novamente mais tarde.' }];
    }
    errors.map((error) => toast.error(error.message));
  }
}

export default votar;
