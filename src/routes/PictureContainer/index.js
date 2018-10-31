import React , { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import PictureBox from '../../components/PictureBox';

class PictureContainer extends React.Component {
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
    // console.log(typeof this.props.data);
    console.log(this.props.data);
    let imgBox;
    if(this.props.data) {
      console.log(this.props.data[0].key);
      imgBox = this.props.data.map( (v,k) => (<PictureBox picSrc={v.key}></PictureBox>))
      console.log(imgBox);
    }
    
    

    // console.log('dddd');
    return (
      <div>
          <div>111111</div>
          {imgBox}
      </div>

      );
  }
  componentDidMount() {
    console.log('did',this.props);
  }

}

PictureContainer.propTypes = {
  
};

// mS2P 返回对象 { data: state.data } 作用在组件上就好比 <PictureBox data={state.data} />
const mapStateToProps = (state) => {
  // console.log("mapStateToProps",state.getPic.data);
  return {
    data: state.getPic.data
  }
};
export default connect(mapStateToProps)(PictureContainer);
// export default PictureBox;
