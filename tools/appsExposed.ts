interface ModuleExposes {
  [key: string]: string
}

const appsExposed: ModuleExposes = {
  './VisitorRoutes': './src/app/RoutesApp.tsx',
}

export default appsExposed
