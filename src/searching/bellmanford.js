import { animate } from './animateShortestPath.js';
const pause = _ => new Promise(resolve => setTimeout(resolve, _));

const BellmanFord = async (grid, startNode, targetNode, setNodes) => {
  // Initialize the start node's distance to 0 and the distance of all other nodes to infinity
  startNode.distance = 0;
  for (let row of grid) {
    for (let node of row) {
      if (node !== startNode) {
        node.distance = Infinity;
      }
    }
  }

  // Iterate over the nodes V-1 times
  for (let i = 0; i < grid.length * grid[0].length - 1; i++) {
    
    // For each node in the grid
    for (let row of grid) {
      
      for (let node of row) {
        await pause(20);
        // For each of the node's neighbors
        for (let [neighbor, weight] of node.edges) {
          // Calculate the tentative distance to the neighbor through the current node
          const tentativeDistance = node.distance + weight;
          // If the tentative distance is shorter than the neighbor's current distance, update the neighbor's distance and set its previous node to the current node
          
          if (tentativeDistance < neighbor.distance) {
            neighbor.visited = true;
            setNodes(prevState => ({...prevState}));
            neighbor.distance = tentativeDistance;
            neighbor.previous = node;
          }
        }
      }
    }
  }

  // Check for negative-weight cycles
  for (let row of grid) {
    for (let node of row) {
      // For each of the node's neighbors
      for (let [neighbor, weight] of node.edges) {
        // If the neighbor can be reached with a shorter distance through the current node, there is a negative-weight cycle in the graph
        if (neighbor.distance > node.distance + weight) {
          throw new Error("Graph contains a negative-weight cycle");
        }
      }
    }
  }

  // Reconstruct the shortest path by following the previous nodes starting from the target node
  let shortestPath = [];
  let currentNode = targetNode;
  while (currentNode !== null) {
    shortestPath.unshift(currentNode);
    currentNode = currentNode.previous;
    if(currentNode.id == startNode.id) {
      break;
    }
  }
  console.log(shortestPath)
  setNodes(prevState => ({
    ...prevState,
    shortestPath: shortestPath
  }))
  await animate(shortestPath, setNodes);
  return shortestPath;
}

export { BellmanFord };