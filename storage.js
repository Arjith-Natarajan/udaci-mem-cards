const initialState = {
  decks: {
    allIds: ['d1', 'd2', 'd3'],
    byId: {
      d1: {
        deckId: 'd1',
        deckName: 'React',
        cardsList: ['c1', 'c2', 'c3'],
        lastStudied: 1529339441,
      },
      d2: {
        deckId: 'd2',
        deckName: 'Redux',
        cardsList: ['c4', 'c5', 'c6'],
        lastStudied: 1529339441,
      },
      d3: {
        deckId: 'd3',
        deckName: 'Udacity',
        cardsList: ['c7', 'c8', 'c9'],
        lastStudied: 1529339441,
      },
    },
  },
  cards: {
    allIds: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'],
    byId: {
      c1: {
        questionId: 'c1',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c2: {
        questionId: 'c2',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c3: {
        questionId: 'c3',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c4: {
        questionId: 'c4',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c5: {
        questionId: 'c5',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c6: {
        questionId: 'c6',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c7: {
        questionId: 'c7',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c8: {
        questionId: 'c8',
        question: 'What is this?',
        answer: 'Nothing',
      },
      c9: {
        questionId: 'c9',
        question: 'What is this?',
        answer: 'Nothing',
      },
    },
  },
  scorePercent: 0,
}
export default initialState
