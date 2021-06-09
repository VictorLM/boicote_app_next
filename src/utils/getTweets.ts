import { format, parseISO } from 'date-fns';
import api from '../services/api';

type AuthorType = {
  id: string;
  name: string;
  userName: string;
  profileImageUrl: string;
};

type PublicMetricsType = {
  replyCount: number;
  retweetCount: number;
  likeCount: number;
};

type TweetsType = {
  id: string;
  text: string;
  createdAt: string;
  author: AuthorType;
  publicMetrics: PublicMetricsType;
}

export type GetTweetsType = {
  errors: string[] | null;
  tweets: TweetsType[];
};

function queryHighlight(query: string, str: string) :string {
  const RegexQuery = new RegExp(query.replace(/,/g, '|'), 'gi');
  return str.replace(RegexQuery, (matched) => `<b>${matched}</b>`);
}

// Param: query = string; palavras únicas separadas por vírgula sem espaços.
// Ex: boicotem,boicote,boicotar
async function getTweets(query: string): Promise<GetTweetsType> {
  try {
    const { data } = await api.get('/tweets', {
      params: {
        query,
      },
    });

    const tweets = data.data.map((tweet, index) => ({
      id: tweet.id,
      text: queryHighlight(query, tweet.text),
      createdAt: format(parseISO(tweet.created_at), 'dd/MM/yyyy HH:mm'),
      author: {
        id: data.includes.users[index].id,
        userName: data.includes.users[index].username,
        name: data.includes.users[index].name,
        profileImageUrl: data.includes.users[index].profile_image_url ?? null,
      },
      publicMetrics: {
        replyCount: Number(tweet.public_metrics.reply_count),
        retweetCount: Number(tweet.public_metrics.retweet_count),
        likeCount: Number(tweet.public_metrics.like_count),
      },
    }));

    return ({ errors: null, tweets });
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
    return ({ errors, tweets: [] });
  }
}

export default getTweets;
