const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://siata.gov.co/ultimasFotosCamaras/';

async function fetchPage() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
}

async function downloadImage(url, filename) {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(filename);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading the image ${filename}:`, error);
  }
}

async function scrapeImages() {
  const html = await fetchPage();
  if (!html) return;

  const $ = cheerio.load(html);
  const imageLinks = [];

  $('a').each((index, element) => {
    const href = $(element).attr('href');
    if (href && href.match(/\.jpg$/)) {
      imageLinks.push(BASE_URL + href);
    }
  });

  const folderPath = path.join(__dirname, 'imagenes_siata');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  for (const link of imageLinks) {
    const fileName = path.basename(link);
    const filePath = path.join(folderPath, fileName);
    console.log(`Descargando: ${fileName}`);
    await downloadImage(link, filePath);
  }

  console.log('Descarga completada');
}

scrapeImages();