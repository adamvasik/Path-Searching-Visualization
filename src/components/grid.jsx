import React from 'react';
import './grid.css';

const Grid = ({ nodes, setStart, setTarget }) => {
  const handleNodeClick = (node) => {
    if (!nodes.startNode) {
      setStart(node);
      return;
    }

    setTarget(node);
    return;
  };

  return (
    <div className="nodes">
      {nodes.grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((node, nodeIndex) => {
            let background = 'white';
            let addClass;
            if (node.id === nodes.startNode?.id) {
              background = 'green';
            } else if (node.id === nodes.targetNode?.id) {
              background = 'red';
            } else if(node.isPath) {
              addClass = 'path';
            } else if(node.visited) {
              addClass = 'visited';
            }

            return (
              <div
                key={nodeIndex}
                className={`node ${addClass}`}
                style={{ backgroundColor: background }}
                onClick={() => handleNodeClick(node)}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export { Grid };
