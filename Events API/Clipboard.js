const textArea = document.getElementById('textArea');
const log = document.getElementById('log');

function logEvent(event, action) {
  const data = event.clipboardData ? event.clipboardData.getData('text/plain') : '';
  const logEntry = document.createElement('div');
  logEntry.textContent = `${action} event triggered. Data: ${data}`;
  log.appendChild(logEntry);
}

// Handling 'cut' event using addEventListener
document.addEventListener('cut', (event) => {
  logEvent(event, 'Cut');
});

// Handling 'cut' event using oncut property
document.oncut = (event) => {
  logEvent(event, 'Cut');
};

// Handling 'copy' event using addEventListener
document.addEventListener('copy', (event) => {
  logEvent(event, 'Copy');
  event.clipboardData.setData('text/plain', 'Copied text');
  event.preventDefault(); // Prevent the default copy action
});

// Handling 'copy' event using oncopy property
document.oncopy = (event) => {
  logEvent(event, 'Copy');
  event.clipboardData.setData('text/plain', 'Copied text');
  event.preventDefault(); // Prevent the default copy action
};

// Handling 'paste' event using addEventListener
document.addEventListener('paste', (event) => {
  logEvent(event, 'Paste');
});

// Handling 'paste' event using onpaste property
document.onpaste = (event) => {
  logEvent(event, 'Paste');
};
