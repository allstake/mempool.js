module.exports = {
  "*.ts": () => [
    "eslint src/**/*.ts --fix",
    "prettier src/**/*.ts --write",
  ],
};
