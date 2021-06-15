import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';
import confirmaBoicote, { ConfirmaBoicoteType } from '../../../../utils/confirmaBoicote';

type ConfirmarPropsType = {
  boicoteConfirmado: ConfirmaBoicoteType;
  boicoteId: string;
}

const Confirmar: React.FC<ConfirmarPropsType> = ({ boicoteConfirmado, boicoteId }) => {
  const router = useRouter();

  useEffect(() => {
    if (!boicoteConfirmado.errors) {
      toast.success('Boicote confirmado com sucesso');
      router.push(`/boicotes/${boicoteId}`);
    } else {
      boicoteConfirmado.errors.map((error) => toast.error(error.message ?? error));
      router.push('/');
    }
  }, []);

  return (
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }
    }
    >
      <h1>Confirmando...</h1>
    </div>
  );
};

// Não estou usando SSR por conta dos votos e dos tweets
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const boicoteConfirmado = await confirmaBoicote(String(ctx.query.id), String(ctx.query.token));
  const boicoteId = String(ctx.query.id);

  return {
    props: {
      boicoteConfirmado,
      boicoteId,
    },
  };
};

export default Confirmar;
