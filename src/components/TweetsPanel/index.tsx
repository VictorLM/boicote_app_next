import React, { useEffect } from 'react';

import { BsArrowUpRight } from 'react-icons/bs';
import { FaRegComment, FaRetweet, FaRegHeart } from 'react-icons/fa';

import { GetTweetsType } from '../../utils/getTweets';

import styles from './styles.module.scss';

type TweetsPanelType = {
  tweetsData: GetTweetsType;
}

const TweetsPanel: React.FC<TweetsPanelType> = ({ tweetsData }) => {
  useEffect(() => {
    // Gamb pra igualar o tamanho da div
    const height = document.getElementById('last-boicotes')?.clientHeight;
    if (height) {
      document.getElementById('tweets-content').style.height = `${height}px`;
    } else {
      document.getElementById('tweets-content').style.height = '80vh';
    }
  }, []);

  return (
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

      <div className={`card ${styles.tweets_content}`} id="tweets-content">

        {tweetsData.errors === null
          ? (
            tweetsData.tweets.map((tweet) => (

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
                    <a
                      href={`https://twitter.com/${tweet.author.userName}/status/${tweet.id}`}
                      target="_blank"
                      rel="noreferrer"
                      dangerouslySetInnerHTML={{
                        __html: tweet.text,
                      }}
                    >
                      {/* {tweet.text} */}
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

            ))

          )
          : (
            // TODO - MAP ERRORS
            <h2>{tweetsData.errors}</h2>
          )}

      </div>
    </div>
  );
};
export default TweetsPanel;
