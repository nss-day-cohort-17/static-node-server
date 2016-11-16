'use strict'

const express = require('express')

express()
.use(express.static('.'))
.listen(8080, () => console.log('Listening on port 8080'))
