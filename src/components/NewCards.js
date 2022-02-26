import React from 'react';
import Proptypes from 'prop-types';

class NewCards extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardRemove,
    } = this.props;
    return (
      <section className="section-card">
        <h2>Pré-Vizualização</h2>
        <div className="card">
          <h3 data-testid="name-card">{ cardName }</h3>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          <p
            className="textarea-card"
            data-testid="description-card"
          >
            { cardDescription }
          </p>
          <ul className="ul-card">
            <li data-testid="attr1-card">
              { cardAttr1 }
            </li>
            <li data-testid="attr2-card">
              { cardAttr2 }
            </li>
            <li data-testid="attr3-card">
              { cardAttr3 }
            </li>
          </ul>
          <p data-testid="rare-card">
            <b>{ cardRare }</b>
          </p>
          {
            cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3>
          }
        </div>
        <button
          type="button"
          data-testid="delete-button"
          onClick={ () => cardRemove(cardName) }
        >
          Excluir
        </button>
      </section>
    );
  }
}

NewCards.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.number.isRequired,
  cardAttr2: Proptypes.number.isRequired,
  cardAttr3: Proptypes.number.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  cardRemove: Proptypes.func.isRequired,
};

export default NewCards;
