## Path Searching Algorithm Visualization
This app visualizes the following path searching algorithms on a grid:

* Dijkstra's algorithm
* A* algorithm
* Breadth-first search (BFS)
* Depth-first search (DFS)
* Bellman-Ford algorithm


The app allows users to select a starting and ending point on the grid, as well as walls and weights for certain cells. The algorithms will then find the shortest path (if one exists) between the starting and ending points.

Here is a brief description of each algorithm:

#### Dijkstra's Algorithm
Dijkstra's algorithm is a graph search algorithm that finds the shortest path from a source vertex to all other vertices in a weighted graph. It works by maintaining a set of distances from the source vertex to each vertex in the graph, and iteratively relaxing these distances until the shortest path to all vertices has been found.

Time complexity: O(E log V)

Guarantees shortest path: Yes

#### A* Algorithm
A* is a heuristic search algorithm that finds the shortest path between a given start and end point. It combines the benefits of Dijkstra's algorithm with the use of a heuristic function that estimates the distance between the current vertex and the end point. This allows the algorithm to explore promising paths more efficiently and find the shortest path faster.

Time complexity: O(E log E)

Guarantees shortest path: Yes

#### Breadth-first search (BFS)
BFS is a graph search algorithm that explores the vertices of a graph layer by layer, starting from a given source vertex. It uses a queue to store the vertices that need to be explored, and adds the neighboring vertices of a vertex to the queue once that vertex has been explored. BFS is complete and finds the shortest path in an unweighted graph.

Time complexity: O(V + E)

Guarantees shortest path: Yes (in an unweighted graph)

#### Depth-first search (DFS)
DFS is a graph search algorithm that explores the vertices of a graph recursively, starting from a given source vertex. It uses a stack to store the vertices that need to be explored, and adds the neighboring vertices of a vertex to the stack once that vertex has been explored. DFS is not guaranteed to find the shortest path.

Time complexity: O(V + E)

Guarantees shortest path: No

#### Bellman-Ford Algorithm
The Bellman-Ford algorithm is a graph search algorithm that finds the shortest path between a given start and end point in a weighted graph. It works by iteratively relaxing the distances between the vertices, starting from the start vertex and ending at the end vertex. The algorithm can handle negative edge weights, but it may not terminate if there is a negative weight cycle in the graph.

Time complexity: O(V E)

Guarantees shortest path: Yes (assuming no negative weight cycle)

### See preview: [Path Searching Visualization](https://replit.com/@adamvasik/Path-Searching-Visualization)
