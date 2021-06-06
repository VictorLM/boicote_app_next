import { GetServerSidePropsContext } from 'next';
import api from '../../services/api';

type VotarType = {
  errors: string[] | null;
};

// TODO - ADD OPÇÃO DE DESVOTAR - PRIMEIRO LÁ NA API
async function votar(
  boicoteId: string, votoIsCima: boolean, ctx: GetServerSidePropsContext,
): Promise<VotarType> {
  //
  try {
    await api.post(`/votos/${boicoteId}`, { cima: votoIsCima }, {
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    });

    return ({ errors: null });
  } catch (err) {
    //
    console.log(err);
    let errors = ['Erro ao processar operação.'];
    if (err.response) {
      // HOUVE RESPOSTA COM ERROR CODE
      errors = err.response.data ?? errors; // NÃO PEGA ERRO UNIQUE DO SEQUELIZE
    } else if (err.request) {
      // NÃO HOUVE RESPOSTA
      errors = ['Nossos servidores não estão respondendo. Tente novamente mais tarde.'];
    }
    return ({ errors });
  }
}

export default votar;
