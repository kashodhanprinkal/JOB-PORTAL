// backend/utils/datauri.js
import DatauriParser from 'datauri/parser.js';
import path from 'path';

const parser = new DatauriParser();

const getDataUri = (file) => {
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
};

export default getDataUri;

