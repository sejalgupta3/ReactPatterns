import React from 'react';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

export default class AppCtrl extends React.Component {
  constructor() { super(); this.state = {world: ''}; }
  componentDidMount = () => { this.sayHello(); };
  sayHello = () => { this.setState({world: 'Hello World is Hot'}); };
  render() {
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        React 0.14 BasicWebpack
        <br/><br/>
        {this.state.world}
      </div>
    );
  }
}
// sayHello = () => { this.setState({world: 'Hello World'}); }