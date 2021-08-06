import React, { useState } from "react";
import "./style.css";
import typeColors from "./typeColors";
import { Modal, ModalBody } from "react-bootstrap";
import { useCart } from "../../hooks/context/CartProvider";

import { MainButton } from '../../components/Button';
import { Styled } from '../Login/styles'
import { toast } from 'react-toastify';

function Card({ pokemon, toggleProduct, key }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function returnMoneyValue(number1, number2) {
    var teste = (number1 * number2).toLocaleString();
    return `R$ ${teste},00`;
  }

  function poundsToKilos(number) {
    return (number / 2.2046).toFixed(2);
  }

  function toMeter(number) {
    return (number / 10).toFixed(2);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notify = ({pokemon}) => {
    toast.warning(`${pokemon.name} adicionado ao carrinho com sucesso!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  //context
  const cart = useCart()
  const add = (pokemon) => () => {
    cart.addToCart({pokemon})
    console.log("Olha o toast!")
    notify({pokemon})
  }

  return (
    <div key={pokemon.id} >
    <div className="Card">
      <div className="Card__img" onClick={handleShow}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="Card__name">
        <p className="paragraph">
          {pokemon.name} #{pokemon.id} 
        </p>
      </div>
      <div className="Card__types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="Card__type"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {capitalizeFirstLetter(type.type.name)}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <div className="Card__types">
          <Modal show={show} onHide={handleClose} centered key={pokemon.id}>
            <Modal.Header>
              <Modal.Title>{capitalizeFirstLetter(pokemon.name)}</Modal.Title>
            </Modal.Header>
            <ModalBody>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
              </div>
              {pokemon.types.map((type) => {
                return (
                  <div
                    className="Card__type"
                    style={{ backgroundColor: typeColors[type.type.name] }}
                  >
                    {capitalizeFirstLetter(type.type.name)}
                  </div>
                );
              })}
            </ModalBody>
            <Modal.Body>
              <p className="title">
                <b>Peso</b>
              </p>
              <p>{poundsToKilos(pokemon.weight)}</p>
              <p className="title">
                <b>Altura</b>
              </p>
              <p>{toMeter(pokemon.height)}</p>
              <p className="title">
                <b>Habilidade</b>
              </p>
              <p>{capitalizeFirstLetter(pokemon.abilities[0].ability.name)}</p>
              <p className="title">
                <b>Preço</b>
              </p>
              <p>{returnMoneyValue(pokemon.height, pokemon.weight)}</p>
            </Modal.Body>
            <Modal.Footer>
              <Styled.CancelButton
                variant="secondary"
                onClick={handleClose}
                style={{ marginLeft: "2px"}}
                width="100px"
                fontSize="14px"
              >
                Fechar
              </Styled.CancelButton>
              <MainButton
                variant="primary"
                onClick={add(pokemon)}
                style={{
                  marginLeft: "2px",
                }}
              >
                Adicionar ao Carrinho
              </MainButton>
            </Modal.Footer>
          </Modal>
        </div>
        </div>
        <div className="Card__name">
          <p className="price">
            {returnMoneyValue(pokemon.height, pokemon.weight)}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MainButton onClick={add(pokemon)}>Adicionar ao Carrinho</MainButton> 
        </div>
      </div>
    </div>
  );
}

export default Card
