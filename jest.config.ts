export default {
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  collectCoverage: true,
  moduleFileExtensions: ['js', 'ts', 'node'],
}