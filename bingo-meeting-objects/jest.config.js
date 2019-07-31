module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters : ["json", "lcov", "text", "clover","cobertura"]  
};