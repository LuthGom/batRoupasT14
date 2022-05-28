import React, { useState } from "react";
import BotaoSubmit from "../../components/BotaoSubmit/BotaoSubmit";
import Input from "../../components/Input/Input";
import { autenticacaoUrl } from "../../services/Api";
import styles from "./Cadastro.module.css";
export default function Cadastro() {
  const [input, setInput] = useState({});
  console.log(input);
  function cadastroReq(e) {
    e.preventDefault();
    try {
      fetch(autenticacaoUrl, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
    setInput({
      nome: "",
      apelido: "",
      email: "",
      senha: "",
    });
  }

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  return (
    <form className={styles.form}>
        <div className={styles.container}>

        
      <Input
        placeholder="Nome Completo"
        name="nome"
        onChange={handleOnChange}
        value={input.nome}
      />
      <Input
        placeholder="Apelido"
        name="apelido"
        value={input.apelido}
        onChange={handleOnChange}
      />
      <Input
        placeholder="E-mail"
        name="email"
        value={input.email}
        onChange={handleOnChange}
      />
      <Input
        placeholder="Senha"
        name="senha"
        value={input.senha}
        onChange={handleOnChange}
      />
      <BotaoSubmit
        texto="Cadastrar"
        type="submit"
        onClick={(e) => cadastroReq(e)}
      />
      </div>
    </form>
  );
}
