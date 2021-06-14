import React, { useState } from 'react';
import { isEmail, isURL } from 'validator';
import { toast } from 'react-toastify';
import { FaBullhorn } from 'react-icons/fa';

import styles from './styles.module.scss';
import api from '../../services/api';

const BoicotarForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [marca, setMarca] = useState('');
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [tags, setTags] = useState('');
  const [links, setLinks] = useState('');

  function montaArray(stringao) {
    if (stringao === null || stringao === '') {
      return [];
    }
    const arr = stringao.split(',').map((item) => item.trim());
    return arr.filter((item) => item); // LIMPAR VALORES EM BRANCO
  }

  async function boicotar() {
    // VALIDANDO FORM
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }
    if (marca.length < 3 || marca.length > 255) {
      formErrors = true;
      toast.error('Marca deve ter entre 3 e 255 caracteres');
    }
    if (titulo.length < 3 || titulo.length > 255) {
      formErrors = true;
      toast.error('Título deve ter entre 3 e 255 caracteres');
    }
    if (texto.length < 5 || texto.length > 2000) {
      formErrors = true;
      toast.error('Texto deve ter entre 3 e 2000 caracteres');
    }
    if (tags.length < 3 || tags.length > 255) {
      formErrors = true;
      toast.error('Todas as Tags devem ter entre 3 e 255 caracteres. Poste ao menos uma Tag.');
    }
    const tagsArray = montaArray(tags);
    tagsArray.map((tag) => { //eslint-disable-line
      if (tag.length < 3 || tag.length > 20) {
        formErrors = true;
        toast.error('Cada Tag deve ter entre 3 e 20 caracteres.');
      }
    });
    if (links.length < 10) {
      formErrors = true;
      toast.error('Poste ao menos um Link.');
    }
    const linksArray = montaArray(links);
    if (linksArray.length > 3) {
      formErrors = true;
      toast.error('Máximo três Links.');
    }
    linksArray.map((link) => { //eslint-disable-line
      if (!isURL(link)) {
        formErrors = true;
        toast.error(`Link inválido: ${link}`);
      } else if (link.length < 10 || link.length > 255) {
        formErrors = true;
        toast.error('Cada Link deve ter entre 10 e 255 caracteres');
      }
    });

    if (formErrors) return;

    const body = {
      nome,
      email,
      marca,
      titulo,
      texto,
      tags: tagsArray,
      links: linksArray,
    };

    try {
      const { data } = await api.post('/boicotes', body, { withCredentials: true });
      console.log(data);
      // LIMPAR FORM
      setNome('');
      setEmail('');
      setMarca('');
      setTitulo('');
      setTexto('');
      setTags('');
      setLinks('');
      toast.success('Boicote cadastrado com sucesso.');
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

    <div className={`card ${styles.card}`} id="boicotar-form">
      <div className={`card-left ${styles.card_left}`}>
        <span>
          <FaBullhorn />
        </span>
        <div />
      </div>
      <div className={styles.card_right}>
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
          <h3 className="heading">Boicote</h3>
          <div className={styles.flex}>
            <div className={styles.input_group}>
              <label htmlFor="marca">Marca/Empresa</label>
              <input type="text" id="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="titulo">Título</label>
              <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="texto">Texto</label>
            <textarea id="texto" className={styles.texto} value={texto} onChange={(e) => setTexto(e.target.value)} />
            <small>Máximo 2000 caracteres</small>
          </div>

          <div className={styles.input_group}>
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              placeholder="Separe as tags com uma vírgula: Racismo, Desigualdade, etc"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="links">Links</label>
            <textarea
              id="links"
              placeholder="Separe on Links com uma vírgula: https://site.com/noticia-um, https://site.com/noticia-dois"
              className={styles.links}
              value={links}
              onChange={(e) => setLinks(e.target.value)}
            />
            <small>Máximo 3 links</small>
          </div>

          <div className={styles.btn_div}>
            <button type="button" className="btn-black" onClick={() => boicotar()}>Boicotar</button>
          </div>

        </form>
      </div>
    </div>

  );
};

export default BoicotarForm;
