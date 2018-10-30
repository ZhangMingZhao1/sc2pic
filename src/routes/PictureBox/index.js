import React , { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';

class PictureBox extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.dispatch( {
      type: 'getPic/fetchPic',
      payload: {

      }
    })
  }
  render() {
    console.log(this.props.data);
    console.log('dddd');
    return (
        <div>111111</div>
      );
  }

}

PictureBox.propTypes = {
};

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};
export default connect(mapStateToProps)(PictureBox);
// export default PictureBox;
