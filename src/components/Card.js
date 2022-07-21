import React from 'react';
import Proptypes from 'prop-types';
import './Card.css';

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

    const IMAGE_DEFAULT = 'https://www.publicdomainpictures.net/pictures/150000/velka/white-background-14532158163GC.jpg';

    const DESCRIPTION_DEFAULT = 'Descrição de sua carta de acordo com sua preferência.';

    return (
      <section className="section-card">
        <h2>Pré-Vizualização</h2>
        <div className="card">
          <div className="name-content">
            <h3 data-testid="name-card">{ cardName || 'Nome'}</h3>
          </div>
          <div className="image-content">
            <img
              className="img-card"
              data-testid="image-card"
              src={ cardImage || IMAGE_DEFAULT }
              alt={ cardName }
            />
          </div>
          <div className="description-content">
            <p
              className="textarea-card"
              data-testid="description-card"
            >
              { cardDescription || DESCRIPTION_DEFAULT }
            </p>
          </div>
          <div className="attr-content">
            <div className="attr-content1">
              <p>
                Força:&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <span data-testid="attr1-card">{ cardAttr1 }</span>
            </div>
            <div className="attr-content2">
              <p>Agilidade:&nbsp;&nbsp;&nbsp;&nbsp; </p>
              <span data-testid="attr2-card">{ cardAttr2 }</span>
            </div>
            <div className="attr-content3">
              <p>Inteligência: </p>
              <span data-testid="attr3-card">{ cardAttr3 }</span>
            </div>
          </div>
          <div className="rare-content">
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
      </section>
    );
  }
}

Card.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.number.isRequired,
  cardAttr2: Proptypes.number.isRequired,
  cardAttr3: Proptypes.number.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
};

export default Card;
