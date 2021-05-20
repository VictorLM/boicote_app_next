import React from 'react';
import {
  FaRegThumbsUp, FaBan, FaBullhorn, FaRegFlag, FaRegCheckSquare,
} from 'react-icons/fa';

const cardItems = [
  {
    id: 1,
    title: 'Interaja',
    icon: <FaRegThumbsUp />,
    text: 'Interaja com a comunidade votando e comentando nos <a href="/boicotes">boicotes</a>. Para votar nos boicotes, use as setas ao lado esquerdo do título. Para comentar, preencha o formulário na página do boicote.',
  },
  {
    id: 2,
    title: 'Boicote',
    icon: <FaBan />,
    text: 'Você também pode criar seu próprio boicote e interagir com a comunidade. É só preencher <a href="/boicotar">esse formulário</a>, confirmar por e-mail e pronto! Seu boicote já estará online.',
  },
  {
    id: 3,
    title: 'Compartilhe',
    icon: <FaBullhorn />,
    text: 'Compartilhe os boicotes nas redes sociais para ter um maior alcance e engajamento. Utilize o link Compartilhar, localizado à direita do rodapé dos boicotes.',
  },
  {
    id: 4,
    title: 'Denuncie',
    icon: <FaRegFlag />,
    text: 'Denuncie boicotes e comentários inapropriados utilizando o link Denunciar, localizado à direita do rodapé tanto dos boicotes quanto dos comentários. Sua ajuda será  muito bem-vinda.',
  },
  {
    id: 5,
    title: 'Pratique',
    icon: <FaRegCheckSquare />,
    text: 'Boicote marcas com seu poder de compra. Não de lucros para quem apoia, pratica ou corrobora com atos e ideias nocivas, fake news, discurso de ódio, etc. Pratique o consumo consciente.',
  },
];

export default cardItems;
