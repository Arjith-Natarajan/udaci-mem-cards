import { createStackNavigator } from 'react-navigation'
import AddNewCard from '../cards/AddNewCard'
import DeckDetail from './DeckDetail'
// here goes import for taking Quiz

const DeckView = createStackNavigator(
  {
    AddCard: AddNewCard,
    DeckDetail,
    //  here goes definition for TakeQuiz: DeckQuiz,
  },
  {
    initialRouteName: 'DeckDetail',
    headerMode: 'none',
  },
)

export default DeckView
