const pause = _ => new Promise(resolve => setTimeout(resolve, _));

const animate = async (shortestPath, setNodes) => {
  console.log('Running Animate')
  for(let i in shortestPath) {
    let currentNode = shortestPath[i];
    await pause(20);
    currentNode.isPath = true;
    setNodes(prevState => ({...prevState}));
  }
}

export { animate };