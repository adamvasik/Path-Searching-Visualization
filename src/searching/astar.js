import { PriorityQueue } from './priorityQueue.js';
import { getCol, getRow } from './addedges.js';
import { animate } from './animateShortestPath.js';

const pause = _ => new Promise(resolve => setTimeout(resolve, _));

const AStar = async (grid, startNode, targetNode, setNodes) => {
  // Initialize the start node's distance to 0 and the distance of all other nodes to infinity
  startNode.distance = 0;
  for (let row of grid) {
    for (let node of row) {
      if (node !== startNode) {
        node.distance = Infinity;
      }
    }
  }

  // Create a priority queue of nodes, where the priority is the estimated total distance (distance from start + heuristic distance to target)
  const priorityQueue = new PriorityQueue((a, b) => a.distance + a.heuristicDistance < b.distance + b.heuristicDistance);
  priorityQueue.enqueue(startNode);

  // While the priority queue is not empty
  while (!priorityQueue.isEmpty()) {
    await pause(20)
    // Extract the node with the smallest estimated total distance
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
        // Calculate the heuristic distance to the target (in this case, we use Manhattan distance)
        neighbor.heuristicDistance = Math.abs(getRow(neighbor.id) - getRow(targetNode.id)) + Math.abs(getCol(neighbor.id) - getCol(targetNode.id));
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
  
  setNodes(prevNodes => ({
        ...prevNodes,
        shortestPath: shortestPath
    })
  )
  await animate(shortestPath, setNodes);
  return shortestPath;
}

export {AStar}
