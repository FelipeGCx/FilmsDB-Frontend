import { type App } from "vue";

// Función para registrar todos los componentes de un directorio
export function registerGlobalComponents(app: App) {
  // Importa todos los componentes del directorio
  const components = import.meta.glob("@/components/globals/**/*.vue", {
    eager: true,
  });

  // Registra cada componente globalmente
  Object.entries(components).forEach(([path, module]: any) => {
    let componentName = path
      .split("/")
      .pop()
      ?.replace(/\.\w+$/, "");
    if (componentName === "index") {
      const parts = path.split("/");
      componentName = parts[parts.length - 2];
    }
    if (componentName) {
      app.component(componentName, module.default);
    }
  });
}
