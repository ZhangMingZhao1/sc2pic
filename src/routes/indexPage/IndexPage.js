import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import PictureBox from '../PictureBox';

class IndexPage extends React.Component {

  render() {
    return (
      <div>
         <PictureBox></PictureBox>
         <div>122222333</div>
      </div>
      );
  }

}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
