module.exports = {
  all: true,
  extends: '@istanbuljs/nyc-config-typescript',
  exclude: [
    'src/tests/**/*.ts',
    'src/repositories',
    'src/server.ts',
  ],
  include: ['src/**/*.ts'],
};
