
import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


// REGISTER
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}


// LOGIN
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

// ADD PROJECT
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

// HOME PROJECT
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-projects`,"","")
}

// ALL PROJECTS
export const allProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all`,"",reqHeader)
}