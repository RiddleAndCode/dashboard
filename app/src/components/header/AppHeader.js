import React, { Component }  from 'react'
import { Header, Item } from 'semantic-ui-react'
import './AppHeader.css';

export default class AppHeader extends Component {
    render() {
        return(
        <Header id="appHeader" className="App-header" size="small">
          <Item className="logo-item">
            <svg className="rnc-logo" aria-labelledby="title">
              <use xlinkHref={process.env.PUBLIC_URL+'/img/RIDDLE&CODE_MAINLOGO_NEG.svg#Ebene_1'}/>
            </svg>
          </Item>
        </Header>
        )
    }
}