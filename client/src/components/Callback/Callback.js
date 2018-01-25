import { Component } from 'react';
import { setIdToken, setAccessToken, setUID } from '../../utils/authService';

class Callback extends Component {

  componentDidMount() {
    setAccessToken();
    setIdToken();
    setUID();
    window.location.href = "/";
  }

  render() {
    return null;
  }
}

export default Callback;