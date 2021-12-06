import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CardItem.css';

class CardItem extends React.Component {
  render() {
    const { products, addState } = this.props;
    const notFound = 'Nenhum produto foi encontrado';

    return products.length === 0 ? notFound : (
      products.map((product) => (
        <>
          {/* Para fazer a utilização de props em componentes <Link>
          foi consultado um artigo em ui.dev
          Source: https://ui.dev/react-router-v5-pass-props-to-link/ */}
          <Link
            to={ {
              pathname: `/details/${product.id}`,
              state: {
                product,
              },
            } }
            data-testid="product-detail-link"
          >
            <div
              data-testid="product"
              key={ product.title }
            >
              <p>{product.title}</p>
              <img
                className="card-image"
                src={ product.thumbnail }
                alt={ product.title }
              />
              <p>{`R$ ${product.price}`}</p>
            </div>
          </Link>
          <button
            className="add-Item-Button"
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addState(product) }
          >
            Adicionar ao carrinho
          </button>
        </>
      ))
    );
  }
}
export default CardItem;

CardItem.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func.isRequired,
    length: PropTypes.arrayOf().isRequired,
  }).isRequired,
  addState: PropTypes.func.isRequired,
};
