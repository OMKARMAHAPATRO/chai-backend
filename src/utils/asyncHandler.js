const asyncHandler =  (requestHandler) =>{
    return (req, res , next) =>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}








// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{ () => {} }
// // this function is a asynchronic  higher order function - Where we pass a function an argument / pass a finction as an paramaeter 
//  const asyncHandler = (func) => async() => {}
// // higher order function
// const asyncHandler = (fn) => () => {}








// try-Catch request handler for Express.js

//     const asyncHandler =(fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//         })
//     }
// }














// Note :-

/*


const asyncHandler =  (requestHandler) =>{
    return (req, res , next) =>{
        Promise.resolve(requestHandler(req, res, next)). _> if the promise resolve then it will return the requestHandler(req, res, next). if the promise is rejected then it will go to the catch block.
        catch((err) => next(err))
    }
}


// promise syntax : - 
              let myPromise = new Promise(function(resolve, catch)

*/
   
// in this file we  make a warapper function under the name of asyncHandler which will take a requestHandler as an argument and return a function that takes req, res, and next as arguments. 
// Inside this function, we use Promise.resolve to execute the requestHandler and catch any errors that occur, passing them to the next middleware.
// purpose of this function is to handle asynchronous operations in Express.js routes, allowing us to write cleaner code without having to manually handle try-catch blocks for each route handler.


/*

It takes a route handler (requestHandler) as an argument.
It returns a new function that wraps the original handler. the new function takes req, res, and next as parameters.
It calls the original handler and wraps it in a Promise.
If the handler returns a rejected promise (i.e., throws an error), the error is automatically passed to Express’s next() 
This allows Express’s built-in error middleware to handle the error, so you don’t need to write try-catch blocks in every async route.

*/