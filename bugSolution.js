const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Use try...catch to handle potential errors

const startServer = () => {
  server.listen(8080, () => {
    console.log('Server is running on port 8080');
  });
};

const onError = (err) => {
  if (err) {
    console.error('Server failed to start:', err);
  }
};

startServer();

// Example of an error that could be caught
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error('Caught error:', error);
}

// Example of async await error handling 
const asyncFunc = async () => {
  try {
    await someAsyncOperation();
  } catch (error) {
    console.error('Async operation failed:', error);
  }
};

// Placeholder for async operation
const someAsyncOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Async operation failed'));
    }, 1000);
  });
};

asyncFunc();