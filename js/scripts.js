// Basic interactivity for toolbar buttons - just console logs for demo

document.getElementById('playBtn').addEventListener('click', () => {
  console.log('Play animation');
  alert('Play animation (demo)');
});

document.getElementById('pauseBtn').addEventListener('click', () => {
  console.log('Pause animation');
  alert('Pause animation (demo)');
});

document.getElementById('undoBtn').addEventListener('click', () => {
  console.log('Undo action');
  alert('Undo (demo)');
});

document.getElementById('redoBtn').addEventListener('click', () => {
  console.log('Redo action');
  alert('Redo (demo)');
});

document.getElementById('saveBtn').addEventListener('click', () => {
  console.log('Save project');
  alert('Save project (demo)');
});
