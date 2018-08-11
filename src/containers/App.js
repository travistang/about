import { connect } from 'react-redux';
import * as WindowSizeAction from '../actions/windowSize'
import App from '../App'
const mapStateToProps = (state) => (
  {
    ...state.windowSize
  }
)

const mapDispatchToProps = (dispatch) => ({
  notifyWindowSizeChange: ({width,height}) => dispatch({
    type: WindowSizeAction.WINDOW_RESIZE,
    width,height
  })
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
