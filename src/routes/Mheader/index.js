import { Button } from 'antd';
import { Component } from 'react';
import styles from './index.less';
import logo from '../../assets/img/logo.png';
import { connect } from 'dva';



class Mheader extends Component {
    render() {
        return (
            <div className={styles.topBar}>
                <div className={styles.webLogo}><img src={logo} alt="" /></div>
                <div className={styles.Mbutton}><Button>登录/注册</Button></div>
            </div>

        )

    }
}

Mheader.propTypes = {

};

// mS2P 返回对象 { data: state.data } 作用在组件上就好比 <PictureBox data={state.data} />
const mapStateToProps = (state) => {
    return {
    }
};
export default connect(mapStateToProps)(Mheader);
