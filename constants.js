const path = require('path')
const JSON_FILENAME = "export-requests.json"
const JSON_FILE_PATH = path.join(__dirname, JSON_FILENAME)
const EXPORTED_DATA_DIR = path.join(__dirname, 'exports')
const APP_ID = "6A6CF887-E6F6-4763-84B6-BEFD2410EE42" // replace with your App ID
const API_TOKEN = "6d82e99fcf0f1ca074c5583392d859068ec9d104" // replace with your API token
const DESK_API_TOKEN = "1ba2c00b308203c591d280a0bd056912019723c1" // replace with your Desk API token
const REQUEST_THROTTLING_TIMEOUT = 5000
const OUTPUT_FORMAT = 'json' // json | csv
const ONE_MONTH = 1000 * 60 * 60 * 24 * 31 // 2,678,400,000

module.exports = {
  JSON_FILENAME,
  JSON_FILE_PATH,
  EXPORTED_DATA_DIR,
  APP_ID,
  API_TOKEN,
  DESK_API_TOKEN,
  REQUEST_THROTTLING_TIMEOUT,
  OUTPUT_FORMAT,
  ONE_MONTH
}