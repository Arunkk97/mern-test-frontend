import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

//register api
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)

}

//get all users
export const getAllUsersAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allUser`,"")
}
