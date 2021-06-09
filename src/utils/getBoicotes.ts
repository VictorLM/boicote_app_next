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
  links?: LinkType[];
}

export type GetBoicotesType = {
  errors: string[] | null;
  boicotes: BoicoteType[];
  boicotesTotalCount: number;
};

async function getBoicotes(
  limite: number | null,
  pagina: number | null,
  ordenarMaisVotados: boolean,
): Promise<GetBoicotesType> {
  // SE ENVIAR LIMITE, NÃO PRECISA ENVIAR A PÁGINA
  // LIMITE DA API É 5 POR PÁGINA
  // const params = limite ? { limite } : { pagina };

  try {
    const { data } = await api.get('/boicotes', {
      params: {
        limite,
        pagina,
        ordenar: ordenarMaisVotados && 'mais_votados',
      },

    });

    const boicotes = data.boicotes.map((boicote) => ({
      id: boicote.id,
      titulo: boicote.titulo,
      marca: boicote.marca,
      texto: boicote.texto,
      tags: boicote.tags,
      createdAt: format(parseISO(boicote.createdAt), 'dd/MM/yyyy'),
      votos: Number(boicote.cimaVotos) - Number(boicote.baixoVotos),
      comentariosCount: Number(boicote.comentariosCount),
      autor: boicote.autor.nome,
    }));

    const boicotesTotalCount = Number(data.boicotesTotalCount);

    return ({ errors: null, boicotes, boicotesTotalCount });
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
    return ({ errors, boicotes: [], boicotesTotalCount: 0 });
  }
}

export default getBoicotes;
