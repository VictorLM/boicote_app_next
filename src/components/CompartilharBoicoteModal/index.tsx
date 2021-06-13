import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  RedditShareButton,
  EmailShareButton,
  // ICONS
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import { VscChromeClose } from 'react-icons/vsc';

import styles from './styles.module.scss';

type CompartilharBoicoteModalType = {
  url: string;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompartilharBoicoteModal: React.FC<CompartilharBoicoteModalType> = ({
  url,
  toggle,
  setToggle,
}) => (
  <div className={`${styles.modal_window} ${toggle ? styles.show : ''}`}>

    <div className={`card ${styles.card} ${styles.modal}`}>
      <div className={`card-left ${styles.card_left}`}>
        <span>Compartilhar</span>
        <div />
      </div>
      <div className={styles.card_right}>

        <button
          type="button"
          className={styles.fechar}
          onClick={() => setToggle(false)}
        >
          <VscChromeClose />
        </button>

        <div className={styles.social_btns}>

          <TwitterShareButton className={styles.social_btn} url={url}>
            <TwitterIcon className={styles.social_icons} round size={54} />
            <small>Twitter</small>
          </TwitterShareButton>
          <FacebookShareButton className={styles.social_btn} url={url}>
            <FacebookIcon className={styles.social_icons} round size={54} />
            <small>Facebook</small>
          </FacebookShareButton>
          <WhatsappShareButton className={styles.social_btn} url={url}>
            <WhatsappIcon className={styles.social_icons} round size={54} />
            <small>WhatsApp</small>
          </WhatsappShareButton>
          <TelegramShareButton className={styles.social_btn} url={url}>
            <TelegramIcon className={styles.social_icons} round size={54} />
            <small>Telegram</small>
          </TelegramShareButton>
          <RedditShareButton className={styles.social_btn} url={url}>
            <RedditIcon className={styles.social_icons} round size={54} />
            <small>Reddit</small>
          </RedditShareButton>
          <EmailShareButton className={styles.social_btn} url={url}>
            <EmailIcon className={styles.social_icons} round size={54} />
            <small>Email</small>
          </EmailShareButton>

        </div>
      </div>
    </div>
  </div>
);

export default CompartilharBoicoteModal;
