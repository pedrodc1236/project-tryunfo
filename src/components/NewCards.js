import React from 'react';
import Proptypes from 'prop-types';
import './NewCard.css';

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
      <section className="new-section-card">
        <div className="new-card">
          <div className="new-name-content">
            <h3 data-testid="name-card">{ cardName || 'Nome'}</h3>
          </div>
          <div className="new-image-content">
            <img
              className="new-img-card"
              data-testid="image-card"
              src={ cardImage || IMAGE_DEFAULT }
              alt={ cardName }
            />
          </div>
          <div className="new-description-content">
            <p
              className="new-textarea-card"
              data-testid="description-card"
            >
              { cardDescription || DESCRIPTION_DEFAULT }
            </p>
          </div>
          <div className="new-attr-content">
            <div className="new-attr-content1">
              <p>
                Força:&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <span data-testid="attr1-card">{ cardAttr1 }</span>
            </div>
            <div className="new-attr-content2">
              <p>Agilidade:&nbsp;&nbsp;&nbsp;&nbsp; </p>
              <span data-testid="attr2-card">{ cardAttr2 }</span>
            </div>
            <div className="new-attr-content3">
              <p>Inteligência: </p>
              <span data-testid="attr3-card">{ cardAttr3 }</span>
            </div>
          </div>
          <div className="new-rare-content">
            <p data-testid="rare-card">
              <b>{ cardRare }</b>
            </p>
          </div>
          <div>
            {
              cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3>
            }
          </div>
        </div>
        <button
          className="btn-delete"
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
