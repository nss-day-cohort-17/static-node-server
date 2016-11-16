'use strict'

const express = require('express')

const port = process.env.PORT || 8080

express()
.use(express.static('.'))
.listen(port, () => console.log(`Listening on port ${port}`))
