# Tarea DevOps formulario 📑🧾🎑🎚️🎛️

## Información personal
- Nombre: Pablo Alejandro Badani Zambrana
- Código: 55789

## Descripción del proyecto 
La tarea muestra el uso de docker en cuanto a la creacion de una aplicacion y una conectividad con la base de datos, creadas mediante contenedores donde la aplicacion se crea con un dockerfile para tener la imagen de la aplicacion y con esto declararlo en el docker-compose para poder crear al mismo tiempo el contenedor de la base de datos y el contenedor de la aplicacion.

## Requisitos técnicos
* Docker: Tener el docker desktop instalado (https://www.docker.com/products/docker-desktop/).

* Git: Tener git instalado para luego poder clonar correctamente el repositorio (https://git-scm.com/downloads).

## Cómo levantar localmente
1. Clonar el repositorio:

        git clone <URL_DEL_REPOSITORIO>

2. Dirigirse a la ruta donde clonamos el repositorio:

        cd /ruta/repositorio/clon

3. Levantar el archivo .yml de este repositorio:

        docker-compose up

4. Para bajar el servicio se pone lo siguiente:

        docker-compose down
