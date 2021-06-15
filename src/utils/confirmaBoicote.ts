import api from '../services/api';

type Error = {
  message: string;
}

export type ConfirmaBoicoteType = {
  errors: Error[] | null;
};

async function confirmaBoicote(id: string, token: string): Promise<ConfirmaBoicoteType> {
  try {
    await api.get(`/boicotes/confirmar/${id}/${token}`);

    return ({ errors: null });
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
    return ({ errors });
  }
}

export default confirmaBoicote;
