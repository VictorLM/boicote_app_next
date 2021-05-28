import api from '../services/api';

type VisitanteVotoType = {
  boicoteId: string;
  cima: boolean;
}

export type GetVisitanteVotosType = {
  errors: string[] | null;
  votos: VisitanteVotoType[] | [];
};

async function getVisitanteVotos(ctx): Promise<GetVisitanteVotosType> {
  try {
    const { data } = await api.get('/visitantes/votos', {
      headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
    });

    return ({ errors: null, votos: data });
    //
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
    return ({ errors, votos: [] });
  }
}

export default getVisitanteVotos;
