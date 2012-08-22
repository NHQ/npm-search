#!/usr/bin/env node

/**
 * Module dependencies.
 */

var request = require('superagent')
  , program = require('commander')
  , printf = require('printf')
  , json = require('JSONStream')
  , wrap = require('wordwrap')
  , wrap = wrap(60);

/**
 * Remote addr.
 */

var remote = 'http://50.116.26.197/npm';

/**
 * Terminal width.
 */

var width = process.stdout.columns;

// options

program
  .usage('<query>')
  .option('-v, --verbose', 'output verbose package information')
  .option('-r, --raw', 'output raw json')
  .parse(process.argv);

// query

var query = encodeURIComponent(program.args.join(' ').trim());

if (!query.length) {
  console.error('\n  <query> required\n');
  process.exit(1);
}

// search

request
.get(remote + '/' + query)
.buffer(false)
.end(function(err, res){
  if (err) throw err;
  if (program.raw) return res.pipe(process.stdout);
  var stream = json.parse([true]);
  res.pipe(stream);
  console.log();
  var output = program.verbose ? verbose : regular;
  stream.on('data', output);
  stream.on('end', function(){
    console.log();
  });
});

/**
 * Highlight query occurrences in str.
 */

function highlight(str) {
  return str;
  return str.replace(query, '\033[1m' + query + '\033[90m');
}

/**
 * Truncate to tty width.
 */

function truncate(str) {
  var pad = 35;
  var w = width - pad;
  if (str.length < w) return str;
  return str.slice(0, w) + '…';
}

/**
 * Regular format.
 */

function regular(pkg) {
  var desc = highlight(truncate(pkg.description || 'no description'));
  printf(process.stdout, '  \033[36m%20s\033[0m : \033[90m%s\033[m\n', pkg.name, desc);
}

/**
 * Verbose format.
 */

function verbose(pkg) {
  var desc = highlight(wrap(pkg.description || 'no description'));
  console.log('  \033[36m%s\033[0m', pkg.name);
  if (pkg.author) console.log('  by \033[90m%s <%s>\033[0m', pkg.author.name, pkg.author.email);
  if (pkg.repository) console.log('  at \033[90m%s\033[0m', repo(pkg.repository.url));
  console.log('  %s', desc.replace(/\n/g, '\n  '));
  console.log();
}

/**
 * Format repo.
 */

function repo(url) {
  return url
    .replace(/^(https?|git):\/\//, '')
    .replace('github.com/', '')
    .replace('.git', '');
}