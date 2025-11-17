// cucumber.js
module.exports = {
  default: `--require step_definitions/**/*.js --require utils/**/*.js --format progress --tags "not @skip" features/**/*.feature`
};