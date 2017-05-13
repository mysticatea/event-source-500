/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path")
const express = require("express")

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

const app = express()

app.get("/events", (_req, res) => res.sendStatus(500))
app.use(express.static(path.join(__dirname, "static-files")))

app.listen(3000)
