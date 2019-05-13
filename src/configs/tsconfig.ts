export default {
  compilerOptions: {
    target: 'esnext',
    moduleResolution: 'node',
    allowJs: true,
    noEmit: true,
    strict: true,
    isolatedModules: true,
    esModuleInterop: true,
  },
  include: ['src'],
  exclude: ['node_modules', 'build'],
};
