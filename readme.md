# Web Scraper de Fotos SIATA

Este proyecto es un **script de Node.js** que realiza **web scraping** en la página de últimas fotos de cámaras de [SIATA](https://siata.gov.co/ultimasFotosCamaras/)**. El objetivo es **descargar todas las imágenes** disponibles en la página y guardarlas localmente en una carpeta, manteniendo los nombres originales de los archivos.

## Características

- Descarga automática de todas las imágenes listadas en la web de SIATA.
- Organiza las imágenes descargadas en una carpeta local, utilizando los mismos nombres que en la web.
- Utiliza **Node.js** y **axios** para realizar las peticiones HTTP, además de **cheerio** para parsear el HTML.

## Tecnologías Utilizadas

- [Node.js](https://nodejs.org/): Entorno de ejecución para JavaScript.
- [axios](https://www.npmjs.com/package/axios): Cliente HTTP para realizar las solicitudes.
- [cheerio](https://www.npmjs.com/package/cheerio): Librería que facilita el scraping al permitir manipular el DOM.

## Instalación y Uso

### Requisitos Previos

Asegúrate de tener **Node.js** instalado en tu equipo. Además, necesitarás **npm** (que viene con Node.js) para instalar las dependencias necesarias.

### Pasos para la Instalación

1. Clona este repositorio:

   ```sh
   git clone https://github.com/PedroPab/siataScraping.git
   ```

2. Entra en la carpeta del proyecto:

   ```sh
   cd siataScraping
   ```

3. Instala las dependencias:

   ```sh
   npm install
   ```

### Ejecución del Script

1. Para descargar todas las imágenes, ejecuta:

   ```sh
   npm run start
   ```

2. Las imágenes se guardarán en una carpeta llamada **`images`** dentro del directorio del proyecto.

## Estructura del Proyecto

- **index.js**: Script principal para realizar el scraping y las descargas de las imágenes.
- **images/**: Carpeta donde se almacenarán todas las imágenes descargadas.
- **package.json**: Archivo de configuración del proyecto con las dependencias necesarias.

## Detalles Técnicos

El script utiliza **cheerio** para analizar el HTML de la página web y extraer los enlaces a las imágenes. Luego, con **axios** se descargan cada una de las imágenes de forma secuencial, asegurándose de mantener los nombres de archivo originales.

## Ejemplo de Uso

Al ejecutar el script, verás en la consola el progreso de descarga de cada imagen, y luego podrás encontrar todos los archivos en la carpeta `images`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este script o agregar nuevas características, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu función:

   ```sh
   git checkout -b feature/nueva-funcion
   ```

3. Haz commit de tus cambios:

   ```sh
   git commit -m 'Agrega una nueva funcionalidad'
   ```

4. Haz push a la rama:

   ```sh
   git push origin feature/nueva-funcion
   ```

5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia **MIT** - consulta el archivo [LICENSE](LICENSE) para más detalles.
