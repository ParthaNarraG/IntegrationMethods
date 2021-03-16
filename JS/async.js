const url='https://api.chucknorris.io/jokes/random';

const params={
  method:'GET',
  headers:{'Content-Type':'application/json'}
}

async function testAPI(){
 const response=await fetch(url,params)
 const res=await response.json();
 console.log(res);
}

testAPI();