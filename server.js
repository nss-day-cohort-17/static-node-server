'use strict'

const express = require('express')

const directory = process.argv[2] || '.'
const port = process.env.PORT || 8080

express()
.use((req, res, next) => {
  // http://stackoverflow.com/questions/49547/making-sure-a-web-page-is-not-cached-across-all-browsers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', 0)
  next()
})
.use(express.static(directory))
.listen(port, () => console.log(`Serving ${directory} on port ${port}`))
