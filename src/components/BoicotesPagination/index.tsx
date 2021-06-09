import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

type BoicotesPaginationType = {
  boicotesTotalCount: number;
  boicotesPorPagina: number;
  pagina: number;
}

const BoicotesPagination: React.FC<BoicotesPaginationType> = ({
  boicotesTotalCount,
  boicotesPorPagina,
  pagina,
}) => {
  const paginationItems = [];
  for (let number = 1;
    number <= Math.ceil(boicotesTotalCount / boicotesPorPagina);
    number += 1) {
    paginationItems.push(
      <li
        key={number}
        className={`${styles.pagination_item} ${number === pagina ? styles.active : ''}`}
      >
        <Link href={`/boicotes?pagina=${number}`}>
          <a>{number}</a>
        </Link>
      </li>,
    );
  }
  return (
    <ol className={styles.pagination}>
      {paginationItems}
    </ol>
  );
};

export default BoicotesPagination;
