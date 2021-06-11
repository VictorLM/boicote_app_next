import { format, parseISO } from 'date-fns';
import api from '../services/api';

type LinkType = {
  link: string;
  confiavel: boolean | null;
}

export type BoicoteType = {
  id: string;
  titulo: string;
  marca: string;
  texto: string;
  tags: string[];
  createdAt: string;
  votos: number;
  comentariosCount: number;
  autor: string;
  links: LinkType[];
}

export type GetBoicoteType = {
  errors: string[] | null;
  boicote: BoicoteType | null;
};

async function getBoicote(id: string): Promise<GetBoicoteType> {
  try {
    const { data } = await api.get(`/boicotes/${id}`);

    const boicote = {
      id: data.id,
      titulo: data.titulo,
      marca: data.marca,
      texto: data.texto,
      tags: data.tags,
      createdAt: format(parseISO(data.createdAt), 'dd/MM/yyyy'),
      votos: Number(data.cimaVotos) - Number(data.baixoVotos),
      comentariosCount: Number(data.comentariosCount),
      autor: data.autor.nome,
      links: data.links,
    };

    return ({ errors: null, boicote });
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
    return ({ errors, boicote: null });
  }
}

export default getBoicote;
