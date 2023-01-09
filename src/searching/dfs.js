import { animate } from './animateShortestPath.js';

const pause = _ => new Promise(resolve => setTimeout(resolve, _));

const DFS = async (grid, startNode, targetNode, setNodes) => {
  // Initialize the stack with the start node
  const stack = [startNode];

  // While the stack is not empty
  while (stack.length > 0) {
    // Extract the top node in the stack
    const currentNode = stack.pop();

    // If the current node is the target node, we have found the path
    if (currentNode === targetNode) {
      break;
    }
    await pause(20);
    // For each of the current node's neighbors
    for (let [neighbor] of currentNode.edges) {
      // If the neighbor has not been visited yet, mark it as visited and add it to the stack
      if (!neighbor.visited) {
        neighbor.visited = true;
        setNodes(prevState => ({...prevState}));
        neighbor.previous = currentNode;
        stack.push(neighbor);
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

export { DFS };