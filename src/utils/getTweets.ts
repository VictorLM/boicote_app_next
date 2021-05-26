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

// Param: query = string; palavras únicas separadas por vírgula sem espaços.
// Ex: boicote,boicotem,boicotar
async function getTweets(query: string): Promise<TweetsType[]> {
  try {
    const { data } = await api.get('/tweets', {
      params: {
        query,
      },
    });

    const tweets = data.data.map((tweet, index) => ({
      id: tweet.id,
      text: tweet.text,
      createdAt: format(parseISO(tweet.created_at), 'dd/MM/yyyy HH:MM'),
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

    return tweets;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default getTweets;
