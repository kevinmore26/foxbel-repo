import  axios from "axios"

const API_KEY='db396a7ab7msh73610af872279d2p1bd1f1jsn1ec3742e729b'

const request=axios.create({
    baseURL:'https://www.deezer.com',
    timeout:30000,
    headers:{'X-RapidAPI-Key': API_KEY}

});
export function obtenerCancionesLast(id){
    const data=request.get(`track/${id}`)
                        .then(response=>response.data)
                        .catch(error=>console.log(error))
    return data
}


