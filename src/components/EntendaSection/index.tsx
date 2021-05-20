import React, { useRef, useState } from 'react';

import { BsArrowLeft } from 'react-icons/bs';

import cardItems from './cardItems';
import styles from './styles.module.scss';

const EntendaSection: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const ulRefs = useRef<HTMLUListElement>();

  const scrollIntoView = () => {
    ulRefs.current.childNodes[currentItem].scrollIntoView({ inline: 'center' });
    setCurrentItem(currentItem === (ulRefs.current.childNodes.length - 1) ? 0 : currentItem + 1);
  };

  return (

    <section className={`${styles.entenda} container`} id="entenda">

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

/*
    <div className={`content full-height-landscape ${styles.content_how_works}`}>

      <div className={styles.cards}>

        <div className={`${styles.headers} zoom-hover`}>
          <h2 className="headers zoom-hover">Como funciona?</h2>
          <p className={`sub-headers ${styles.p_sub_header}`}>
            Aqui você encontra e organiza seus boicotes
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegThumbsUp title="Joinha" />
            </div>
            <h3>Interaja</h3>
          </header>
          <p className="font-size-small">
            Interaja com a comunidade votando e comentando nos
            {' '}
            <Link href="/boicotes">boicotes</Link>
            . Para votar, use as setas ao lado esquerdo dos títulos. Para comentar,
            preencha o formulário na página do boicote.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegPlusSquare title="Adicionar" />
            </div>
            <h3>Crie</h3>
          </header>
          <p className="font-size-small">
            Você também pode criar seu próprio boicote e interagir
            com a comunidade. É só preencher
            {' '}
            <Link href="/boicotes">esse formulário</Link>
            {' '}
            , confirmar por e-mail e pronto! Seu boicote já estará online.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaBullhorn title="Megafone" />
            </div>
            <h3>Compartilhe</h3>
          </header>
          <p className="font-size-small">
            Compartilhe os boicotes nas redes sociais para ter um maior alcance e engajamento.
            Utilize o link Compartilhar, localizado à direita do rodapé dos boicotes.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegFlag title="Bandeira" />
            </div>
            <h3>Denuncie</h3>
          </header>
          <p className="font-size-small">
            Denuncie boicotes e comentários inapropriados utilizando o link Denunciar,
            localizado à direita do rodapé tanto dos boicotes quanto dos comentários.
            Sua ajuda será  muito bem-vinda.
          </p>
        </div>

        <div className={`card zoom-hover ${styles.card}`}>
          <header>
            <div>
              <FaRegCheckSquare title="Bandeira" />
            </div>
            <h3>Pratique</h3>
          </header>
          <p className="font-size-small">
            Boicote marcas com seu poder de compra.
            Não de lucros para quem apoia, pratica ou corrobora
            com atos e ideias nocivas, fake news, discurso de ódio, etc.
            Pratique o consumo consciente.
          </p>
        </div>

      </div>

    </div>
    */
