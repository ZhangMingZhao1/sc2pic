import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import PictureContainer from '../PictureContainer';

class IndexPage extends React.Component {

  render() {
    return (
      <div>
         <PictureContainer></PictureContainer>
         
      </div>
      );
  }

}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
