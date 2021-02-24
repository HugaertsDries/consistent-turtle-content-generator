import { graph as Graph, sym as RDFNode, parse, serialize } from 'rdflib';
import fs from 'fs-extra';

process();

function process() {
  let files = fs.readdirSync('files/');
  files = files.filter(file => file.match(/.*\.(ttl)/ig));
  for (const file of files) {
    const store = new Graph();
    const graph = 'http://temp-graph';
    console.log(`Started parsing ${file}`);
    parse(fs.readFileSync(`files/${file}`, 'utf8'), store, graph, 'text/turtle');
    console.log(`Started serializing ${file}`);
    const content = serialize(new RDFNode(graph), store, undefined, 'application/n-triples');
    console.log(`Finished processing ${file}`);
    fs.writeFileSync(`processed/${file}`, content);
  }
}


