class ImageUpload {
	async upload(file) {
		const url = 'https://api.cloudinary.com/v1_1/djfyvcyg6/image/upload';
		const formData = new FormData();

		formData.append('file', file);
		formData.append(
			'upload_preset',
			'https://res.cloudinary.com/djfyvcyg6/image/upload/v1643113060/000043380025_akkqhd.jpg'
		);

		await fetch(url, {
			method: 'POST',
			body: formData,
		}).then((response) => {
			return response.json();
		});
	}
}

export default ImageUpload;
