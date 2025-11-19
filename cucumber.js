// cucumber.js
module.exports = {
  default: `--require support/**/*.js --require step_definitions/**/*.js --require utils/**/*.js --format progress --tags "not @skip" features/**/*.feature`
};