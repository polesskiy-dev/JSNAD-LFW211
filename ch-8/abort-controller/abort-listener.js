/**
 * Create an asynchronous function that simulates a task taking some time to complete.
 * Use AbortController to cancel the operation if it takes more than 100 milliseconds.
 * If the operation is aborted, handle it gracefully by logging “Task aborted” to the console.
 * If it completes successfully, log “Task completed successfully” to the console.\
 */

const controller = new AbortController();
const { signal } = controller; // signal is inside

const promisifiedTimeout = (delay) => new Promise((resolve, reject) => {
    // setTimeout returns corresponding ID by which it could be canceled
    const timeoutId = setTimeout(resolve, delay);

    // assign canceling the timeout by 'abort' event
    signal.addEventListener('abort', () => {
        console.log('aborting promise');
        clearTimeout(timeoutId)
    })
});

promisifiedTimeout(500)
    .then(() => console.log('should not be logged'));

// emits 'abort' event to signal
controller.abort();