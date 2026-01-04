# How Node JS Works ?

Operations =>

- Blocking => Synchronous Code
- Non-Blocking => Asynchronous Code

- Request made => Event Queue => Event loop checks whether it is blocking or non blocking
  - If non-blocking => it process it and send the response to the user
  - but If blocking => it goes to the Thread pool
  - Threadpool checks whether the thread is available and if it is available then
    thread will resolve this operation (computation/database/filesystem)
    return the response to the event loop
    send the response to the user
  - We prefer to write the non-blocking code

## Modules in NodeJS

- reusable block of code
- I need to export it and whereever required I can import it

## Types of modules

- Core modules
- Local Modules
- Third-party modules

### Core Modules

- comes with the nodejs installation
- Ex. os , path , fs

#### OS Module

#### PATH Module

### Local Module

### Third Party Module

#### LODASH Module =>

- Lodash is a JavaScript utility library that provides various functions for common
  programming tasks.
- Lodash is versatile and powerful for backend development, providing utility
  functions that make data manipulation, object handling, and other common tasks
  more efficient and easier to implement.
- Its consistent and optimized functions can help reduce bugs.
- Improve the readability of your code, making it an invaluable tool for Node.js
  developers.
- Provides Consistency => Cross-Browser Compatibility (Lodash functions work
  consistently across different browsers and environments, eliminating issues
  caused by browser-specific behavior)
- Performance Optimization =>Efficient Implementations (Lodash functions are
  optimized for performance, often more so than equivalent native JavaScript
  implementations.) => [reverse array]

### DEEP COPY vs SHALLOW COPY

Object.assign() creates a shallow copy of the object. This means that if your object
contains nested objects or arrays, the nested structures are not copied; instead,
only their references are copied. Modifying the nested objects in the copy will also
affect the original object.
