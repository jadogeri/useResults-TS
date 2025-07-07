module.exports = {
    preset: "ts-jest",
    //testEnvironment: "node",
   // setupFiles: ['./tests/setupTests.ts'],
    setupFilesAfterEnv: ['./tests/setupTests.ts'],
      transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform .ts and .tsx files with ts-jest
    // Add other transformations if needed, e.g., for CSS or SVG files
  },
 // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],


  };