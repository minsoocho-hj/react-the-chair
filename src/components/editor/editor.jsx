import React, { useRef } from 'react';
import styles from './editor.module.css';

const Editor = ({ onAdd }) => {
	const formRef = useRef();
	const titleRef = useRef();
	const brandRef = useRef();
	const designerRef = useRef();
	const yearRef = useRef();
	const descRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const card = {
			id: Date.now(),
			title: titleRef.current.value || '',
			brand: brandRef.current.value || '',
			designer: designerRef.current.value || '',
			year: yearRef.current.value || '',
			desc: descRef.current.value || '',
		};

		formRef.current.reset();
		onAdd(card);
	};
	return (
		<div className={styles.editor}>
			<div className={styles.h2}>
				Make <br />
				your collection
			</div>
			<form className={styles.form} onSubmit={onSubmit} ref={formRef}>
				<input
					type='text'
					ref={titleRef}
					placeholder='Title'
					className={styles.title}
				/>
				<input
					type='text'
					ref={brandRef}
					placeholder='Brand'
					className={styles.brand}
				/>
				<input
					type='text'
					ref={designerRef}
					placeholder='Designer'
					className={styles.designer}
				/>
				<input
					type='text'
					ref={yearRef}
					placeholder='Designed year'
					className={styles.year}
				/>
				<input type='file' className={styles.img} />
				<textarea
					type='text'
					ref={descRef}
					placeholder='Description..'
					className={styles.desc}
				/>
				<button className={styles.btn}>create</button>
			</form>
		</div>
	);
};

export default Editor;
