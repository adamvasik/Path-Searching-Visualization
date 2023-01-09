const getRow = (str) => {
  let y = '';
  let i = 0;
  let found = false;

  while(i < str.length && !found) {
    y+=str[i];
    if(str[i] == ' ' || str[i] == ',') found = true;
    i++;
  }

  return parseInt(y);
}

const getCol = (str) => {
  let x = '';
  let i = str.length - 1;
  let found = false;

  while(i > 0 && !found)  {
    x = str[i] + x;
    if(str[i] == ' ' || str[i] == ',') found = true;
    i--;
  }

  return parseInt(x);
}

const addEdges = (nodes, currentNode) => {
  let row = getRow(currentNode.id);
  let col = getCol(currentNode.id);

  const rows = nodes.length;
  const cols = nodes[0].length;
  
  //LEFT
  if(col > 0) {
      if(nodes[row][col - 1])    currentNode.addEdge(nodes[row][col - 1], 1);
  }
  //RIGHT
  if(col < cols - 1 ) {
      if(nodes[row][col + 1])    currentNode.addEdge(nodes[row][col + 1], 1);
  }
  //DOWN
  if(row < rows - 1 ) {
      if(nodes[row + 1][col])    currentNode.addEdge(nodes[row + 1][col], 1);
  }
  //UP
  if(row > 0) {
      if(nodes[row - 1][col])    currentNode.addEdge(nodes[row - 1][col], 1);
  }
  
}


export { addEdges, getCol, getRow }