# consistent-turtle-content-generator

Crudely put together tool to generate consistent content within turtle-file to check for diff.

## How to run
> **NOTE**: make sure you have run `npm install` before using.
```shell
node -r esm index.js 
```
if you get a "Javascript heap out of memory" error add `--max-old-space-size=8192 ` to the beginning off the `node` command.