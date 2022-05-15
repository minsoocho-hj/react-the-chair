import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './services/authentication';
import ImageUpload from './services/image_uploader';
import FileUploader from './components/fileUploader/fileUploader';

const authenticate = new Authentication();
const imageUploader = new ImageUpload();
const root = ReactDOM.createRoot(document.getElementById('root'));
const ImgFileInput = (props) => (
	<FileUploader {...props} imageUploader={imageUploader} />
);
root.render(
	<BrowserRouter>
		<App authenticate={authenticate} ImgFileInput={ImgFileInput} />
	</BrowserRouter>
);
