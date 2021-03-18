const url='https://api.chucknorris.io/jokes/random';

const request=new XMLHttpRequest();
request.open('GET',url);
request.onload=()=>{
    console.log(request.response)
}
request.responseType="json";
request.send();