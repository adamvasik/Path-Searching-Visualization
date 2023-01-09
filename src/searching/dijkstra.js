import { PriorityQueue } from'./priorityQueue.js';
import { animate } from './animateShortestPath.js';

const pause = _ => new Promise(resolve => setTimeout(resolve, _));

const Dijkstra = async (grid, startNode, targetNode, setNodes) => {
  console.log('Running Dijkstra.')
  // Initialize the start node's distance to 0 and the distance of all other nodes to infinity
  startNode.distance = 0;
  for (let row of grid) {
    for (let node of row) {
      if (node !== startNode) {
        node.distance = Infinity;
      }
    }
  }

  // Create a priority queue of nodes, where the priority is the distance from the start node
  const priorityQueue = new PriorityQueue((a, b) => a.distance < b.distance);
  priorityQueue.enqueue(startNode);

  // While the priority queue is not empty
  while (!priorityQueue.isEmpty()) {
    // Extract the node with the smallest distance (the start node at the beginning)
    await pause(20)
    const currentNode = priorityQueue.dequeue();

    // If the current node is the target node, we have found the shortest path
    if (currentNode === targetNode) {
      break;
    }

    // For each of the current node's neighbors
    for (let [neighbor, weight] of currentNode.edges) {
      // Calculate the tentative distance to the neighbor through the current node
      const tentativeDistance = currentNode.distance + weight;
      
      // If the tentative distance is shorter than the neighbor's current distance, update the neighbor's distance and set its previous node to the current node
      if (tentativeDistance < neighbor.distance) {
        neighbor.distance = tentativeDistance;
        neighbor.previous = currentNode;
        // If the neighbor is not in the priority queue, add it to the priority queue
        if (!priorityQueue.hasValue(neighbor)) {
          
          neighbor.visited = true;
          setNodes(prevState => ({...prevState}));
          priorityQueue.enqueue(neighbor);
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
  }
  setNodes(prevState => ({
    ...prevState,
    shortestPath: shortestPath
  }))
  console.log('Finished Dijkstra');
  await animate(shortestPath, setNodes);
  return shortestPath;
}

export { Dijkstra }