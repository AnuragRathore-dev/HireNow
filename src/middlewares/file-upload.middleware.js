import multer from "multer";
import fs from "fs";
import path from "path"; // Import the path module

// Function to ensure that the destination directory exists
const ensureDirectoryExistence = (filePath) => { 
    const directory = path.dirname(filePath);
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
};

// Configuration for uploading resume files
const resumeStorageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = 'public/resume/'; // Update the destination path
        ensureDirectoryExistence(destinationPath); // Ensure the directory exists
        cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    },
});

export const uploadfiles = multer({ storage: resumeStorageConfig });

// Configuration for uploading images
const imageStorageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/');
    },
    filename: (req, file, cb) => {
        const name = Date.now() + "-" + file.originalname;
        cb(null, name);
    },
});

// Middleware for uploading images
export const uploadImage = multer({ storage: imageStorageConfig });