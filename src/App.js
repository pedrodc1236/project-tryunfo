import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import NewCards from './components/NewCards';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      form: {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        hasTrunfo: false,
      },
      deck: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.btnRemove = this.btnRemove.bind(this);
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      deck: [...prevState.deck, prevState.form],
      form: {
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
      },
    }));
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState((prevState) => ({
      deck: [...prevState.deck],
      form: { ...prevState.form, [name]: value },
    }));
  }

  isSaveButtonDisabled() {
    const {
      form: {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      },
    } = this.state;

    const numberMax = 210;
    const attrMax = 90;

    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && Number(cardAttr1) >= 0
      && Number(cardAttr1) <= attrMax
      && Number(cardAttr2) >= 0
      && Number(cardAttr2) <= attrMax
      && Number(cardAttr3) >= 0
      && Number(cardAttr3) <= attrMax
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= numberMax)
    ) {
      return false;
    }
    return true;
  }

  btnRemove(valueCardName) {
    this.setState((prevState) => ({
      deck: prevState.deck.filter((card) => card.cardName !== valueCardName),
    }));
  }

  render() {
    const {
      form: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      },
      deck,
    } = this.state;
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form
            hasTrunfo={ deck.some((card) => card.cardTrunfo) }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardImage={ cardImage }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>

        <section className="deck-content">
          <h3 className="deck">Deck Completo</h3>
          {deck.map((card, index) => (
            <NewCards
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardImage={ card.cardImage }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              cardRemove={ this.btnRemove }
            />
          ))}

        </section>
      </>
    );
  }
}

export default App;
