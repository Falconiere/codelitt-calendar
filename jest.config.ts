import type {Config} from 'jest';

const config: Config = {
  transformIgnorePatterns: [
    "./node_modules/(?!date-fns)/",
  ],
  collectCoverageFrom: [
    "src/**/**/**/*.{ts,tsx}",
  ],
  coveragePathIgnorePatterns: [
    "index.ts",
    "src/utils/tailwind/cn.ts",
    "src/constants/*",
  ],
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  testPathIgnorePatterns: ["mocks"],
};

export default config;