import React from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { FaRegComment, FaRetweet, FaRegHeart } from 'react-icons/fa';

import styles from './styles.module.scss';

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

type TweetsPanelType = {
  tweets: TweetsType[];
}

const TweetsPanel: React.FC<TweetsPanelType> = ({ tweets }) => (
  <div>
    <div>
      <h2 className="heading">Tweets</h2>
      <p className="sub-heading">
        Veja o que está acontecendo no
        {' '}
        <a href="https://twitter.com/explore">Twitter</a>
        .
      </p>
    </div>

    <div className={`card ${styles.tweets_content}`}>

      {tweets?.map((tweet) => (

        <div key={tweet.id} className={styles.card_tweet}>
          <div className={styles.left}>
            <img src={tweet.author.profileImageUrl} alt="Foto de perfil" />
          </div>
          <div className={styles.right}>
            <div className={styles.headings}>
              <p>
                {tweet.author.name}
                {' · '}
                <small>{tweet.createdAt}</small>
              </p>
              <a href={`https://twitter.com/${tweet.author.userName}/status/${tweet.id}`} target="_blank" rel="noreferrer">
                <BsArrowUpRight />
              </a>
            </div>
            <p className={styles.text}>
              <a href={`https://twitter.com/${tweet.author.userName}/status/${tweet.id}`} target="_blank" rel="noreferrer">
                {tweet.text}
              </a>
            </p>
            <div className={styles.metrics}>
              <span>
                {tweet.publicMetrics.replyCount}
                <FaRegComment />
              </span>
              <span>
                {tweet.publicMetrics.retweetCount}
                <FaRetweet className={styles.rt_icon} />
              </span>
              <span>
                {tweet.publicMetrics.likeCount}
                <FaRegHeart />
              </span>
            </div>
          </div>
        </div>

      ))}

    </div>
  </div>
);

export default TweetsPanel;
