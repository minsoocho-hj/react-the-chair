class ImageUpload {
	async upload(file) {
		const url = 'https://api.cloudinary.com/v1_1/djfyvcyg6/image/upload';
		const formData = new FormData();

		formData.append('file', file);
		formData.append('upload_preset', 'furniture');

		const result = await fetch(url, {
			method: 'POST',
			body: formData,
		});

		return await result.json();
	}
}

export default ImageUpload;
