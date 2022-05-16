import styles from './fileUploader.module.css';

const FileUploader = ({ imageUploader, onFileChange }) => {
	const onChange = async (e) => {
		const uploaded = await imageUploader.upload(e.target.files[0]);

		onFileChange({
			url: uploaded.url,
		});
	};
	return (
		<input
			type='file'
			accept='image/*'
			name='file'
			className={styles.uploader}
			onChange={onChange}
		/>
	);
};

export default FileUploader;
