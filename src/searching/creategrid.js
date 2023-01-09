import { Node } from './node.js';
import { addEdges } from './addedges.js';

const createGrid = (x, y) => {
  let nodes = [];
  
  for(let i = 0; i < x; i++) {
    let temp = [];
    for(let j = 0; j < y; j++) {
      temp.push(new Node(`${i}, ${j}`));   
    }
    nodes.push(temp);
  }
  
  for(let i in nodes) {
    for (let k in nodes[i]) {
      let currentNode = nodes[i][k];
      addEdges(nodes, currentNode);
    }
  }
  
  return nodes;
}

export { createGrid }