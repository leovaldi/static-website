# Sitio Web Estático - Proyecto Kubernetes Minikube

Este repositorio contiene el contenido del sitio web estático que será desplegado localmente en un entorno Kubernetes utilizando Minikube.

## 📁 Estructura del sitio

```
static-website/
├── index.html
├── style.css
└── java.js
```

Este contenido será montado dentro del contenedor Nginx para ser servido localmente a través de Kubernetes.

## 🚀 Instrucciones para el despliegue

1. Clonar el repositorio localmente:

```bash
git clone https://github.com/Leovaldi/static-website.git
```

2. Verificá que el contenido (index.html, style.css, java.js) esté **directamente en el directorio raíz**, no dentro de una subcarpeta.

> 📝 Nota: Reemplazá la ruta con la dirección exacta en tu sistema.

## 🛠️ Personalización del sitio

Podés editar libremente los archivos `index.html`, `style.css`, etc. para personalizar el contenido de la página.

## 🧾 Licencia

Este repositorio puede ser usado con fines educativos y para prácticas en entornos locales.

---

📌 **Importante**: Este repositorio forma parte de un proyecto académico para la materia *Computación en la Nube*, cuyo entorno de ejecución completo está documentado en [este repositorio complementario](https://github.com/Leovaldi/k8s-manifiestos).

```