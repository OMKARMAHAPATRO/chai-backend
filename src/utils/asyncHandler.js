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