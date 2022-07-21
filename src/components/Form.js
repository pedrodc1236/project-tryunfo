import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './Form.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h1>Adicionar nova carta</h1>

        <label
          htmlFor="name-input"
        >
          Nome
          <br />
          <input
            id="name-input"
            type="text"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="description-input"
        >
          Descrição
          <br />
          <textarea
            id="description-input"
            name="cardDescription"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="attr1-input"
        >
          Attr01
          <input
            id="attr1-input"
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            placeholder="min = 0 / max = 90"
          />
        </label>

        <label
          htmlFor="attr2-input"
        >
          Attr02
          <input
            id="attr2-input"
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="min = 0 / max = 90"
          />
        </label>

        <label
          htmlFor="attr3-input"
        >
          Attr03
          <input
            id="attr3-input"
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            placeholder="min = 0 / max = 90"
          />
        </label>

        <label
          htmlFor="image-input"
        >
          Imagem
          <input
            id="image-input"
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label
          htmlFor="rare-input"
        >
          Raridade
          <br />
          <select
            id="rare-input"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <div>
          <label
            className="trunfo-content"
            htmlFor="trunfo-input"
          >
            { hasTrunfo ? (
              <p>Você já tem um Super Trunfo em seu baralho</p>
            ) : (
              <>
                <input
                  id="trunfo-input"
                  type="checkbox"
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                Super Trybe Trunfo
              </>
            )}

          </label>
        </div>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.number.isRequired,
  cardAttr2: Proptypes.number.isRequired,
  cardAttr3: Proptypes.number.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  hasTrunfo: Proptypes.bool.isRequired,
  isSaveButtonDisabled: Proptypes.bool.isRequired,
  onInputChange: Proptypes.func.isRequired,
  onSaveButtonClick: Proptypes.func.isRequired,
};

export default Form;
