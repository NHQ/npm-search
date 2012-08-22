
# npm-search

  Faster npm search using [reds](http://github.com/visionmedia/reds) and
  dominictarr's [JSONStream](https://github.com/dominictarr/JSONStream):

```
$ time npm search flow control
real	0m16.572s

$ time npm-search flow control
real	0m0.519s
```

## Installation

```
$ npm install npm-search -g
```

## Usage:

```
  
Usage: npm-search <query>

Options:

  -h, --help     output usage information
  -v, --verbose  output verbose package information
  -r, --raw      output raw json
  -V, --version  output the version number

```

## Examples

  Regular search:
  ![](http://f.cl.ly/items/1X05043h0Z2H3L0M423D/Screen%20Shot%202012-08-21%20at%206.22.59%20PM.png)

  Verbose search:

 ![](http://f.cl.ly/items/2e3q0v2u3n2L1w342444/Screen%20Shot%202012-08-21%20at%206.23.05%20PM.png)

  Raw JSON:

 ![](http://f.cl.ly/items/3D0U3t2t08392P0t1m13/Screen%20Shot%202012-08-21%20at%206.23.15%20PM.png)

## License 

(The MIT License)

Copyright (c) 2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.