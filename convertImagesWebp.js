const path = require("path");
const fs = require('fs');
const sharp = require('sharp');

const folderPath = path.join(__dirname, "public/images");
const newFolderPath = path.join(__dirname, "public/imagesWebp");

function makeNewFolder (newPath) {
    if (!fs.existsSync(newPath)){
        fs.mkdirSync(newPath);
    }
}

function readDirectory(pathDir, newFolderPath) {
    makeNewFolder(newFolderPath);
    fs.readdirSync(pathDir).forEach(function(file) {
        let newPath = pathDir+'/'+file;
        let copyPath = newFolderPath+'/'+file;
        if(fs.lstatSync(newPath).isDirectory()) {
            try {
                if (!fs.existsSync(copyPath)) {
                    fs.mkdirSync(copyPath);
                    return readDirectory(newPath, copyPath);
                }
            } catch (error) {
                console.error("Please remove the oldest new folder before execute this script")
            }
        } else {
            const extension = copyPath.substring(copyPath.lastIndexOf('.'));
            if(extension === ".webp") {
                sharp(newPath).toFile(copyPath)
            }
            else if (extension === ".svg") {
                fs.copyFileSync(newPath, copyPath);
            }
            else {
                const fileWebp = copyPath.substring(0,copyPath.lastIndexOf('.')) + '.webp';
                sharp(newPath).webp().toFile(fileWebp);
            }
        }
    });
}

readDirectory(folderPath, newFolderPath);