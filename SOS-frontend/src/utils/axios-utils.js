const { default: axios } = require("axios");

const client=axios.create({baseURL: 'http://localhost:9090'})

export const get=async(url)=>{
    const onSuccess=(response)=>response
    const onError=(error)=>error
    return client.get(url).then(onSuccess).catch(onError)
}

export const post=async(url,data)=>{
    const onSuccess=(response)=>response
    const onError=(error)=> { throw error}
    return client.post(url,data).then(onSuccess).catch(onError)
}
