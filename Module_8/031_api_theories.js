// All HTTP request methods are as follows:

// GET: Used to retrieve data from a server at the specified resource.
// HEAD: Same as GET but it transfers the status line and header section only.
// POST: Used to send data to a server to create/update a resource.
// PUT: Used to send data to a server to create/update a resource.
// DELETE: Used to delete the specified resource from the server.
// PATCH: Used to apply partial modifications to a resource.
// CONNECT: Used to establish a tunnel to the server identified by the target resource.
// OPTIONS: Used to describe the communication options for the target resource.
// TRACE: Used to perform a message loop-back test along the path to the target resource.
// OPTIONS: The OPTIONS method represents a request for information about the communication
// options available on the request/response chain identified by the Request-URI.

// Common HTTP Status Codes:

// 200 OK: The request has succeeded.
// 201 Created: The request has been fulfilled and resulted in a new resource being created.
// 204 No Content: The server successfully processed the request, but is not returning any
// content.
// 400 Bad Request: The server could not understand the request due to invalid syntax.
// 401 Unauthorized: The client must authenticate itself to get the requested response.
// 403 Forbidden: The client does not have access rights to the content.
// 404 Not Found: The server can not find the requested resource.
// 500 Internal Server Error: The server has encountered a situation it doesn't know how to
// handle.
// 502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid
// response from the upstream server.
// 503 Service Unavailable: The server is not ready to handle the request, often due to
// maintenance or overload.
// 504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a
// timely response from the upstream server.
// These status codes help clients understand the result of their HTTP requests and take
// appropriate actions based on the response.

// HTTP Status Code Categories:

// 1xx (Informational): The request was received, continuing process.
// 2xx (Successful): The request was successfully received, understood, and accepted.
// 3xx (Redirection): Further action needs to be taken in order to complete the request.
// 4xx (Client Error): The request contains bad syntax or cannot be fulfilled.
// 5xx (Server Error): The server failed to fulfill an apparently valid request.

// Understanding these categories helps in diagnosing issues with HTTP requests and responses.
