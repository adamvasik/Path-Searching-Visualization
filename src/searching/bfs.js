import { animate } from './animateShortestPath.js';
const pause = _ => new Promise(resolve => setTimeout(resolve, _));

const BFS = async (grid, startNode, targetNode, setNodes) => {
  // Initialize the queue with the start node
  const queue = [startNode];

  // While the queue is not empty
  while (queue.length > 0) {
    // Extract the first node in the queue
    const currentNode = queue.shift();

    // If the current node is the target node, we have found the path
    if (currentNode === targetNode) {
      break;
    }
    await pause(20)
    // For each of the current node's neighbors
    for (let [neighbor] of currentNode.edges) {
      // If the neighbor has not been visited yet, mark it as visited and add it to the queue
      if (!neighbor.visited) {
        neighbor.visited = true;
        setNodes(prevState => ({...prevState}));
        neighbor.previous = currentNode;
        queue.push(neighbor);
      }
    }
  }

  // Reconstruct the path by following the previous nodes starting from the target node
  let path = [];
  let currentNode = targetNode;
  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = currentNode.previous;
    if(currentNode.id == startNode.id) {
      break;
    }
  }
  setNodes(prevState => ({
    ...prevState,
    shortestPath: path
  }))
  await animate(path, setNodes);
  return path;
}


export { BFS }