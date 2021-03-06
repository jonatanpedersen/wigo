# wigo
What Is Going On? Creates a http server on any port that serves static files from any path and outputs all requests (path, method, headers, body) to the console.

[![Build Status](https://travis-ci.org/jonatanpedersen/wigo.svg?branch=master)](https://travis-ci.org/jonatanpedersen/wigo)
[![NPM Version](https://img.shields.io/npm/v/wigo.svg)](https://www.npmjs.com/package/wigo)
[![NSP Status](https://nodesecurity.io/orgs/jonatanpedersen/projects/c28b3818-69b8-4cf9-90f3-524a5e520692/badge)](https://nodesecurity.io/orgs/jonatanpedersen/projects/c28b3818-69b8-4cf9-90f3-524a5e520692)
[![Greenkeeper badge](https://badges.greenkeeper.io/jonatanpedersen/wigo.svg)](https://greenkeeper.io/)

## Install
``` bash
$ npm install wigo -g
```

## Usage

```
$ wigo -h

WIGO (What Is Going On)

  Web server that serves static files from a directory and outputs all requests
  to stdout. You can use it to pipe requests to other processes for analysis.
  This server is meant to help you during development or debugging, and is not
  intended for use in a production environment.

Options

  -p, --port number    Port to listen on. (6187)
  -d, --dir string     Directory with files. (./)
  -f, --file string    Default file when a file is not found in the directory.
  -s, --space string   Space used for JSON.stringify.
  -S, --slashes        Rewrites urls without trailing slashes
```

## Licence
The MIT License (MIT)

Copyright (c) 2019 [Jonatan Pedersen](https://www.jonatanpedersen.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
