import styles from './Loader.module.css';

const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={`${styles.skFoldingCube} ${styles.active}`}>
				<div className={`${styles.skCube1} ${styles.skCube}`} />
				<div className={`${styles.skCube2} ${styles.skCube}`} />
				<div className={`${styles.skCube3} ${styles.skCube}`} />
				<div className={`${styles.skCube4} ${styles.skCube}`} />
			</div>
		</div>
	);
};

export { Loader };