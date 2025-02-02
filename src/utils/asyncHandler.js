
// const asyncHandler = (fun)=> async (req, res, next)=>{
//     try {
//             await fun(req,res,next)
//     } catch (error) {
//         res.status((error.code) || 500 ).json({
//             success:false,
//             message: error.message,
//         })

        
//     }
// }

const asyncHandler = (requestHandler)=>{
    (req, res, next)=>{
        try {
          Promise.resolve(requestHandler(req, res, next))
        } catch (error) {
            error.next
        }
    }
}
export {asyncHandler}