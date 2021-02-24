# consistent-turtle-content-generator

Crudely put together tool to generate consistent content within turtle-file to check for diff.

## How to run
> **NOTE**: make sure to run `npm install` before first usage. 

1) Drop the files you want to process in `./files`

2) Run the tool:
```shell
node -r esm index.js 
```
if you get a "Javascript heap out of memory" error add `--max-old-space-size=8192 ` to the beginning off the `node` command.