import { connect } from 'react-redux'
import Timeline from '../components/timeline/Timeline'

export default connect(
  (state) => {
    return { state: state.Blocks }
  }
)(Timeline);