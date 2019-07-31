import React, { Component }  from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Settings from '../settings/Settings'
import './Stats.css';

export default class Stats extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }

    this.toggleSettings = this.toggleSettings.bind(this);
    this.hideSettings = this.hideSettings.bind(this);
  }

  activeIndex = 0;

  toggleSettings() {
    this.setState({visible: !this.state.visible})
  }

  hideSettings() {
    this.setState({visible: false})
  }
    
  render() {
    return(
    <Menu  inverted={true} pointing={true} secondary={true} size='small'>
      <Container fluid={true}>
        <Menu.Item as='div' active>
          {this.props.name}
        </Menu.Item>
        <Menu.Item as='div' >
          {'Block Height: '}
          <span>{this.props.state.lastBlock}</span>
        </Menu.Item>
        <div className="connected">
          <Menu.Item as='div' className="connRight">
            <span ref="connection" onClick={this.toggleSettings} className="connection">
            <span className="connection-url">{this.props.state.connected} </span>
            { this.state.visible ? (<FaChevronUp/>) : (<FaChevronDown/>) } 
            </span>
          </Menu.Item>
          <Settings visible={this.state.visible} hideSettings={this.hideSettings} toggleSettings={this.toggleSettings} />
        </div>
      </Container>
    </Menu>
    )
  }
}