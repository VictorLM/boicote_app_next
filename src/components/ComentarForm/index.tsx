import React, { useState } from 'react';
import { isEmail } from 'validator';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { ComentarioType } from '../../utils/getComentarios';

import styles from './styles.module.scss';
import api from '../../services/api';

type ComentarFormType = {
  boicoteId: string;
  comentarios: ComentarioType[];
  setComentarios: React.Dispatch<ComentarioType[]>;
}

const ComentarForm: React.FC<ComentarFormType> = ({
  boicoteId,
  comentarios,
  setComentarios,
}) => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');

  async function comentar() {
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }
    if (comentario.length < 3 || comentario.length > 255) {
      formErrors = true;
      toast.error('Comentário deve ter entre 3 e 255 caracteres');
    }
    if (formErrors) return;

    const body = {
      nome,
      email,
      comentario,
    };

    try {
      const { data } = await api.post(`/comentarios/${boicoteId}`, body, { withCredentials: true });

      const novoComentario = {
        id: data.id,
        comentario: data.comentario,
        createdAt: format(parseISO(data.createdAt), 'dd/MM/yyyy'),
        autor: data.Autor.nome,
      };

      setComentarios([...comentarios, novoComentario]);
      // LIMPAR FORM
      setNome('');
      setEmail('');
      setComentario('');
      toast.success('Comentário cadastrado com sucesso.');
      // scroll to novo comentário
      const element = document.getElementById(`comentario-${novoComentario.id}`);
      element?.scrollIntoView({ block: 'end', behavior: 'smooth' });
    } catch (err) {
      //
      console.log(err);
      let errors = [{ message: 'Erro ao processar operação.' }];
      if (err.response) {
      // HOUVE RESPOSTA COM ERROR CODE
        errors = err.response.data ?? errors; // NÃO PEGA ERRO UNIQUE DO SEQUELIZE
      } else if (err.request) {
      // NÃO HOUVE RESPOSTA
        errors = [{ message: 'Nossos servidores não estão respondendo. Tente novamente mais tarde.' }];
      }
      errors.map((error) => toast.error(error.message));
    }
  }

  return (

    <div className={`card ${styles.card}`} id="comentar">
      <div className={`card-left ${styles.card_left}`}>
        <span>Comentar</span>
        <div />
      </div>
      <div className={styles.card_right}>
        <form>
          <div className={styles.flex}>
            <div className={styles.input_group}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <small>Seu e-mail não será exibido</small>
            </div>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="comentario">Comentário</label>
            <textarea id="comentario" className={styles.comentario} value={comentario} onChange={(e) => setComentario(e.target.value)} />
            <small>Máximo 255 caracteres</small>
          </div>
          <div className={styles.btn_div}>
            <button type="button" className="btn-black" onClick={() => comentar()}>Comentar</button>
          </div>

        </form>
      </div>
    </div>

  );
};

export default ComentarForm;
