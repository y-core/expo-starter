module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    '^~assets/(.*)': '<rootDir>/assets/$1',
    '^§/(.*)': '<rootDir>/srvr/src/$1',
    '^§shared/(.*)': '<rootDir>/srvr/shared/$1',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg))',
  ],
};
