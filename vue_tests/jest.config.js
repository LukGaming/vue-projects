module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/tests/**/*.spec.js'],
  snapshotSerializers: ['jest-serializer-vue'],
};