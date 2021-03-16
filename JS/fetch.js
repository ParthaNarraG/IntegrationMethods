const url='https://api.chucknorris.io/jokes/random';

const params={
  method:'GET',
  headers:{'Content-Type':'application/json'}
}

fetch(url,params).then((response)=>{
    return response.json()
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})