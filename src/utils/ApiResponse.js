class ApiResponse {
    constructor(sttuscode, data, message = "success"){
        this.statuscode = sttuscode
        this.data = data
        this.message = message
        this.success = sttuscode < 400 
    }
}
export {ApiResponse}
// purpose : this class is used to create a standardized response format for API responses, including status codes, data, and messages. It helps maintain consistency in API responses across the application.