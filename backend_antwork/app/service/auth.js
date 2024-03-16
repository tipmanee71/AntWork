const crypto = require("crypto");
var pool = require("../connection.js");

exports.hashPassword = function hashPassword(password) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      const salt = buf.toString("hex");
      crypto.pbkdf2(password, salt, 120000, 64, "sha512", (err, key) => {
        resolve({ salt: salt, hash: key.toString("hex") });
      });
    });
  });
};

exports.hashPasswordSync = function hashPasswordSync(password) {
  crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString("hex");
    crypto.pbkdf2Sync(password, salt, 120000, 64, "sha512", (err, key) => {
      return { salt: salt, hash: key.toString("hex") };
    });
  });
};

exports.verifyPassword = function verifyPassword(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 120000, 64, "sha512", (err, key) => {
      resolve(key.toString("hex"));
    });
  });
};

