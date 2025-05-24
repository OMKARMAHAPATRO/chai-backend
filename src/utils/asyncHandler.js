const asyncHandler =  (requestHandler) =>{
    return (req, res , next) =>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}








// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{ () => {} }
// // this function is a asynchronic function
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