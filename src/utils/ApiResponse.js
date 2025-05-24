class ApiResponse {
    constructor(sttuscode, data, message = "success"){
        this.statuscode = sttuscode
        this.data = data
        this.message = message
        this.success = sttuscode < 400 
    }
}