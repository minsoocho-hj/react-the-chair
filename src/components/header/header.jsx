import ButtonUnderLine from '../button/ButtonUnderLine';
import styles from './header.module.css';

const Header = ({ authenticate, loginState, setLoginState }) => {
	return (
		<div className={styles.header}>
			<h1 className={`${styles.title} ${styles.rotate} `}>The chair</h1>
			<ButtonUnderLine
				authenticate={authenticate}
				loginState={loginState}
				setLoginState={setLoginState}
			/>
		</div>
	);
};

export default Header;
