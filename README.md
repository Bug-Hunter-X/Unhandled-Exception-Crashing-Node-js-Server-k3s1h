# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions that lead to server crashes.  The `bug.js` file contains code that throws an error without any error handling. This results in the server abruptly terminating.

The `bugSolution.js` file provides a corrected version of the code that uses a `try...catch` block to handle exceptions gracefully, preventing the server from crashing.