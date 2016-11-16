'use strict'

const express = require('express')

const directory = process.argv[2] || '.'
const port = process.env.PORT || 8080

express()
.use(express.static(directory))
.listen(port, () => console.log(`Serving ${directory} on port ${port}`))
