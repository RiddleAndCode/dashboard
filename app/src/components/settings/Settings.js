import React, { Component }  from 'react';
import { FaWindowClose } from 'react-icons/fa';
import './Settings.css';
import { updateSocket } from '../../services/store'

export default class Settings extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            host: "",
            port: "",
            api: "/api/v1/",
            validTx: "streams/valid_transactions",
            secure: true,

            errorHost: false,
            errorPort: false
        }
    
        this.handleChange = this.handleChange.bind(this);
        document.addEventListener('mousedown', this.handleClick, false);
    }

    resetState(){
        this.setState({
            host: "",
            port: "",
            errorHost: false,
            errorPort: false
        })
    }

    handleChange(event) {
        var value = event.target.value

        if(event.target.name === "secure")
            value = (event.target.value === 'true');
        
        if(event.target.name === "port" && value !== "")
            value = +event.target.value;
        
        this.setState({
            [event.target.name]: value
        });
    }

    newConnect() {
        if(this.state.host !== "" && this.state.port !== "" && +this.state.port >= 0){
            this.resetState();
            this.props.toggleSettings();
            updateSocket(this.state.host, this.state.port, this.state.api, this.state.validTx, this.state.secure);
        }
        if(this.state.host === "")
            this.setState({errorHost: true})
        else
            this.setState({errorHost: false})
        
        if(this.state.port === "" || +this.state.port < 0)
            this.setState({errorPort: true})
        else
            this.setState({errorPort: false})
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        // make shure that the the click happened outside of the settings modal and not on the connection url
        if(!this.node.contains(e.target) && e.target.className !== "connection-url"){ this.props.toggleSettings(); }
    } 

    render(){
        return(
            <div ref={node => this.node = node} className={this.props.visible ? 'settings' : 'settings hide'}>
                <FaWindowClose className="close-icon" onClick={this.props.toggleSettings}/>
                <div>
                    <label> 
                        Host: <br/>
                    </label>
                    <input name="host" type="text" placeholder="ipdb3.riddleandcode.com" value={this.state.host} onChange={this.handleChange} className={this.state.errorHost ? 'settings-input error' : 'settings-input'} />
                </div>
                <div>
                    <label>
                        Port number: <br/>
                    </label>
                    <input name="port" type="number" placeholder="80" value={this.state.port} onChange={this.handleChange} className={this.state.errorPort ? 'settings-input error' : 'settings-input'} />
                </div>
                <div>
                    <label>
                        Secure: <br/>
                    </label>
                    <select name="secure" value={this.state.secure} onChange={this.handleChange} className="settings-input">
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.newConnect.bind(this)} className="settings-btn">Connect</button>
                </div>
            </div>
        )
    }
}