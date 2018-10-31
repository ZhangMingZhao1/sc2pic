import styles from './index.less';
function PictureBox(props) {
    return (
        <div key={props.picSrc}><img className={styles.picBox} src={`http://pao1opmq0.bkt.clouddn.com/${props.picSrc}`} alt=""/></div>
    )
}
export default PictureBox;
