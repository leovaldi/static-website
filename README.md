# Sitio Web Estático - Proyecto Kubernetes Minikube

Este repositorio contiene el contenido del sitio web estático que será desplegado localmente en un entorno Kubernetes utilizando Minikube.

## 📁 Estructura del sitio

La estructura del repositorio es la siguiente:

```
static-website/
├── index.html
├── style.css
└── java.js
```

El contenido de estos archivos será montado dentro de un contenedor Nginx para ser servido a través de Kubernetes.

## 🚀 Instrucciones para el despliegue

### 1. Clonar el repositorio localmente:

```bash
git clone https://github.com/Leovaldi/static-website.git
```

### 2. Verificar la estructura del sitio

Asegúrate de que los archivos `index.html`, `style.css`, y `java.js` estén **directamente en el directorio raíz** del repositorio, y no dentro de una subcarpeta. La estructura de tu directorio debe verse así:

```
static-website/
├── index.html
├── style.css
└── java.js
```

### 3. Personalización del sitio

Puedes personalizar el contenido de tu sitio editando los archivos `index.html`, `style.css`, y `java.js`. Cualquier cambio realizado en estos archivos se reflejará en el contenedor cuando se reinicie el despliegue.

### 4. Desplegar el sitio con Kubernetes

Para desplegar el sitio, asegúrate de que los manifiestos de Kubernetes estén aplicados correctamente (ver [instrucciones del primer README](#)).

### 5. Ver los cambios

Si realizas cambios en los archivos del sitio web, puedes reiniciar el contenedor para que los cambios se reflejen. Para hacerlo, ejecuta el siguiente comando:

```bash
kubectl rollout restart deployment/static-site
```

Esto reiniciará el contenedor Nginx y servirá la nueva versión de los archivos.

## 🧾 Licencia

Este repositorio puede ser usado con fines educativos y para prácticas en entornos locales.

---

📌 **Importante**: Este repositorio forma parte de un proyecto académico para la materia *Computación en la Nube*, cuyo entorno de ejecución completo está documentado en [este repositorio complementario](https://github.com/Leovaldi/k8s-manifiestos).

---
