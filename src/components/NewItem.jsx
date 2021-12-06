import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewItem.css';

/** Este componente é responsável por exibir um novo item
 * no carrinho de comprar. Ele é renderizado de forma dinâmica
 * no componente ShoppingCart.jsx, onde algumas props são
 * passadas, incluindo funções e um produto em específico. */
class NewItem extends Component {
  render() {
    /** Props vindo de App.js */
    const { product, handleDelete, increaseQuantity, decreaseQuantity } = this.props;

    // const quantity = cart.filter((item) => item === product);

    return (
      /** Abaixo é gerado um card de um produto adicionado ao carrinho.
       * Recebe funções de incremento e decremento, para aumentar e diminuir a quantida-
       * de de itens em um carrinho. */
      <div className="main-page">
        <div key={ product.title }>
          <p
            className="title"
            data-testid="shopping-cart-product-name"
          >
            {product.title}
          </p>
          <img className="image" src={ product.thumbnail } alt={ product.title } />
          <div className="options-buttons">
            <button type="button" onClick={ () => handleDelete(product) }>X</button>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => increaseQuantity(product) }
            >
              + MAIS
            </button>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => decreaseQuantity(product) }
            >
              - MENOS
            </button>
          </div>
          <p>
            Valor do produto: R$
            {product.price}
          </p>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            {`Quandidade selecionada: ${product.quantity}` }
          </span>
        </div>
      </div>
    );
  }
}

NewItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};
export default NewItem;
