const { Storage } = require("@google-cloud/storage");
const storage = new Storage({ keyFilename: "antjob-storage.json" });
const uniHRbucket = storage.bucket("unihr-bucket");

exports.uploadFile = function uploadFile(pathFile, file) {

  const blob = uniHRbucket.file(pathFile)
  const blobStream =  blob.createWriteStream();

  return new Promise((resolve, reject) => {
    blobStream.on('error', (error) => {
      reject(error);
    });

    blobStream.on('finish', () => {
      resolve();
    });

    blobStream.end(file.buffer);
  });
};