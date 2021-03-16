const url='https://api.chucknorris.io/jokes/random';

const request=new XMLHttpRequest();
request.open('GET',url);
request.responseType="json";
request.send();