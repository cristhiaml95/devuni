# Despliegue en Firebase Hosting (Next.js dinámico)

Para desplegar tu proyecto Next.js con SSR y rutas dinámicas en Firebase Hosting:

1. **Construye el proyecto:**

   ```sh
   npm run build
   ```

2. **Despliega a Firebase:**

   ```sh
   firebase deploy
   ```

No necesitas `next export` ni ningún paso adicional, ya que tu app funciona de forma dinámica.

---

**Notas:**
- Si ves errores de permisos en `.next`, elimina la carpeta `.next` y vuelve a ejecutar el build.
- Si Firebase te advierte sobre Node.js 18, considera actualizar a una versión soportada pronto.
