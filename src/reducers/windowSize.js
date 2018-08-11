import * as WindowSizeAction from '../actions/windowSize'

const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const sizeReducer = (state = initialState,action) => {
  switch(action) {
    case WindowSizeAction.WINDOW_RESIZE:
      return {width: action.width,height: action.height}
    default:
      return state
  }
}
export default sizeReducer
