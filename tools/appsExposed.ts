interface ModuleExposes {
  [key: string]: string
}

const appsExposed: ModuleExposes = {
  './Routes': './src/app/RoutesApp.tsx',
}

export default appsExposed
