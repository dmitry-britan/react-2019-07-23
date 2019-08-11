import {combineReducers} from 'redux'
import counter from './counter'
import restaurants from './restaurants'
import reviews from './reviews'
import cart from './cart'
import dishes from './dishes'

export default combineReducers({
  count: counter,
  restaurants,
  reviews,
  cart,
  dishes,
})
