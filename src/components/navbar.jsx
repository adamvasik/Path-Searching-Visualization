import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './navbar.css';

const Navbar = ({ handleSearch }) => {
  const [currentAlgorithm, setCurrentAlgorithm] = useState('');

  const options = [
    { key: 'dijkstra', text: 'Dijkstra', value: 'dijkstra' },
    { key: 'astar', text: 'A*', value: 'astar' },
    { key: 'bfs', text: 'BFS', value: 'bfs' },
    { key: 'dfs', text: 'DFS', value: 'dfs' },
    { key: 'bellmanford', text: 'BellmanFord', value: 'bellmanford' },
  ];

  const handleAlgorithmChange = (event, data) => {
    setCurrentAlgorithm(data.value);
  };

  const reset = () => {
    handleSearch('reset');
  };
  
  const run = () => {
    handleSearch(currentAlgorithm);
  };
  
  return (
    <div className="navbar">
      <h1>PATH SEARCHING VISUALIZATION</h1>
      <div className='actionWrapper'>
        <p>ALGORITHMS:</p>
        <Dropdown
          placeholder='Select algorithm'
          options={options}
          selection
          onChange={handleAlgorithmChange}
        />
        <button onClick={reset}>Reset</button>
        <button onClick={run}>Run</button>
      </div>
    </div>
  );
};

export { Navbar };





