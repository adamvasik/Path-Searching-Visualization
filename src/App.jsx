import './App.css';
import { React, useState } from 'react';
import { createGrid } from './searching/creategrid.js';
import { Navbar } from './components/navbar';
import { Grid } from './components/grid';
import { Footer } from './components/footer';
import { AStar } from './searching/astar.js';
import { Dijkstra } from './searching/dijkstra.js';
import { BFS } from './searching/bfs.js';
import { DFS } from './searching/dfs.js';
import { BellmanFord } from './searching/bellmanford.js';


export default function App() {
  const width = 40;
  const height = 25;

  const [nodes, setNodes] = useState({
    grid: createGrid(width, height),
    startNode: null,
    targetNode: null,
    shortestPath: [],
    visited: [],
    running: false
  });

  const setStart = (node) => {
    setNodes(prevNodes => ({
      ...prevNodes,
      startNode: node
    })
    )
    return;
  }

  const setTarget = (node) => {
    setNodes(prevNodes => ({
      ...prevNodes,
      targetNode: node
    })
    )
    return;
  }

  const handleSearch = (str) => {
    switch (str) {
      case 'dijkstra':
        Dijkstra(nodes.grid, nodes.startNode, nodes.targetNode, setNodes);
        break;
      case 'astar':
        AStar(nodes.grid, nodes.startNode, nodes.targetNode, setNodes);
        break;
      case 'dfs':
        DFS(nodes.grid, nodes.startNode, nodes.targetNode, setNodes);
        break;
      case 'bfs':
        BFS(nodes.grid, nodes.startNode, nodes.targetNode, setNodes);
        break;
      case 'bellmanford':
        BellmanFord(nodes.grid, nodes.startNode, nodes.targetNode, setNodes);
        break;
      case 'reset':
        setNodes({
          grid: createGrid(width, height),
          startNode: null,
          targetNode: null,
          shortestPath: [],
          visited: [],
          running: false
        })
        break;
      default:
        return;
    }
  }
  const startTarget = () => {
    if (!nodes.startNode) {
      return (<h4>Please select a start node.</h4>)
    } else if (!nodes.targetNode) {
      return (<h4>Please select a target node.</h4>)
    } else {
      return null;
    }
  }
  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <h5>NOTICE: If you have battery saving mode enabled on your device, the animation on this website may not function properly. To ensure the best experience, I recommend disabling battery saving mode or trying right-clicking whenever the animation gets stuck. </h5>
      {startTarget()}
      <Grid nodes={nodes} setStart={setStart} setTarget={setTarget} />
      <Footer />
    </>
  )
}
