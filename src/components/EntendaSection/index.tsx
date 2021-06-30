import React, { useRef, useState } from 'react';

import { BsArrowLeft } from 'react-icons/bs';

import cardItems from './cardItems';
import styles from './styles.module.scss';

const EntendaSection: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const ulRefs = useRef<HTMLUListElement>();

  const scrollIntoView = () => {
    ulRefs.current.children[currentItem].scrollIntoView({ inline: 'center', block: 'nearest' });
    setCurrentItem(currentItem === (ulRefs.current.children.length - 1) ? 0 : currentItem + 1);
  };

  return (

    <section className={`${styles.entenda} container full-vh`} id="entenda">

      <div className={styles.headings}>
        <h2 className="heading">Entenda</h2>
        <p className={`sub-heading ${styles.sub_heading}`}>Aqui você encontra e organiza seus boicotes.</p>
      </div>

      <div className={styles.content_flex}>

        <div className={styles.arrow_div}>
          <button type="button" className={styles.arrow} onClick={() => scrollIntoView()}>
            <BsArrowLeft />
          </button>
        </div>

        <ul className={styles.cards} ref={ulRefs}>

          {cardItems.map((card) => (
            <li key={card.id}>

              <div className={`card ${styles.card}`}>
                <div className={`card-left ${styles.card_left}`}>
                  {card.icon}
                  <div />
                </div>
                <div className={styles.card_right}>

                  <div className={styles.card_header}>
                    <h3>
                      {card.icon}
                      {card.title}
                    </h3>
                  </div>
                  <p
                    className={styles.card_text}
                    dangerouslySetInnerHTML={{ __html: card.text }}
                  />
                </div>
              </div>

            </li>
          ))}

        </ul>
        <div className={styles.indicators}>
          {cardItems.map((card, index) => (
            <span
              key={card.id}
              className={`${styles.dot}
                ${index + 1 === currentItem ? styles.active
                : [(currentItem === 0 && index === 4) ? styles.active : ''] // GAMB VIOLENTA
                }
              `}
            />
          ))}
        </div>

      </div>

    </section>

  );
};

export default EntendaSection;
