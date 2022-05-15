import React from 'react';
import styles from './editor.module.css';

const Editor = (props) => (
	<div className={styles.editor}>
		<div className={styles.h2}>
			Make <br />
			your collection
		</div>
		<form className={styles.form}>
			<input type='text' placeholder='Title' className={styles.title} />
			<input type='text' placeholder='Brand' className={styles.brand} />
			<input type='text' placeholder='Designer' className={styles.designer} />
			<input type='text' placeholder='Designed year' className={styles.year} />
			<input type='file' className={styles.img} />
			<textarea
				type='text'
				placeholder='Description..'
				className={styles.desc}
			/>
		</form>
		<button className={styles.btn}>create</button>
	</div>
);

export default Editor;
