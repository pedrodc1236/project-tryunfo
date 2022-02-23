import React from 'react';
import Proptypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div>
        <h2 data-testid="name-card">{cardName}</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">
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
    );
  }
}

Card.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.string.isRequired,
  cardAttr2: Proptypes.string.isRequired,
  cardAttr3: Proptypes.string.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
};

export default Card;
