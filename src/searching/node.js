class Node {
  constructor(id) {
    this.id = id;
    this.distance = Infinity;
    this.previous = null;
    this.edges = new Set();
    this.visited = false;
    this.isWall = false;
    this.isPath = false;
  }

  addEdge(node, weight) {
    this.edges.add([node, weight]);
  }
  
}

export { Node }