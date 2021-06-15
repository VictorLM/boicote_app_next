import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { VscChromeClose } from 'react-icons/vsc';

import styles from './styles.module.scss';
import api from '../../services/api';

type DenunciarModalType = {
  id: string;
  tipo: 'boicote' | 'comentario';
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const DenunciarModal: React.FC<DenunciarModalType> = ({
  id,
  tipo,
  toggle,
  setToggle,
}) => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [motivo, setMotivo] = useState('');

  async function denunciar() {
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }
    if (motivo.length < 3 || motivo.length > 255) {
      formErrors = true;
      toast.error('Motivo deve ter entre 3 e 255 caracteres');
    }
    if (formErrors) return;

    const body = {
      nome,
      email,
      texto: motivo,
    };

    try {
      await api.post(`/denuncias/${tipo}/${id}`, body, { withCredentials: true });
      setToggle(false);
      // LIMPAR FORM
      setNome('');
      setEmail('');
      setMotivo('');
      toast.success('Denúncia enviada com sucesso. Obrigado por reportar.');
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
    <div className={`${styles.modal_window} ${toggle ? styles.show : ''}`}>

      <div className={`card ${styles.card} ${styles.modal}`}>
        <div className={`card-left ${styles.card_left}`}>
          <span>Denunciar</span>
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

          <form>
            <div className={styles.flex}>
              <div className={styles.input_group}>
                <label htmlFor="nome">Seu nome</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className={styles.input_group}>
                <label htmlFor="email">Seu email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <small>Seu e-mail não será exibido</small>
              </div>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="motivo">Motivo</label>
              <textarea id="motivo" className={styles.motivo} value={motivo} onChange={(e) => setMotivo(e.target.value)} />
              <small>Máximo 255 caracteres</small>
            </div>
            <div className={styles.btn_div}>
              <button type="button" className="btn-black" onClick={() => denunciar()}>Denunciar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default DenunciarModal;
