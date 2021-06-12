import { format, parseISO } from 'date-fns';
import api from '../services/api';

export type ComentarioType = {
  id: number;
  comentario: string;
  createdAt: string;
  autor: string;
}

export type GetComentariosType = {
  errors: string[] | null;
  comentarios: ComentarioType[];
};

async function getComentarios(boicoteId: string): Promise<GetComentariosType> {
  try {
    const { data } = await api.get(`/comentarios/${boicoteId}`);

    const comentarios = data.map((comentario) => ({
      id: comentario.id,
      comentario: comentario.comentario,
      createdAt: format(parseISO(comentario.createdAt), 'dd/MM/yyyy'),
      autor: comentario.Autor.nome,
    }));

    return ({ errors: null, comentarios });
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
    return ({ errors, comentarios: [] });
  }
}

export default getComentarios;
