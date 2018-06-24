import { createStackNavigator } from 'react-navigation'
import AddNewCard from '../cards/AddNewCard'
import DeckDetail from './DeckDetail'
// here goes import for taking Quiz

const DeckView = createStackNavigator(
  {
    ViewDeck: DeckDetail,
    AddCard: AddNewCard,
    //  here goes definition for TakeQuiz: DeckQuiz,
  },
  {
    initialRouteName: 'ViewDeck',
    headerMode: 'none',
  },
)

export default DeckView
