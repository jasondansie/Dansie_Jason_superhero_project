# REST

mozilla developer http
https://developer.mozilla.org/en-US/docs/Web/HTTP

http methods
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

http status
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes


## Methods
GET
POST
PUT
DELETE

# Resources

Example to get all superheros:
```
http://localhost:5000/api/superheros HTTP/1.1
```
The GET request would be:

GET /api/superheros

returns all superheros as json array (can be other formats as well)

Superhero number 2 
```
http://localhost:5000/api/superhero/2
```

GET /api/superhero/2

returns the superhero with the id of 2

```json
{
    "id": 2,
    "name": "Super Man",
    "yearOfBirth": 1976,
    "gear": "Cape",
    "costume": "blue and red outfit"
}
```

### POST
add a new superhero

POST /api/superhero

```json
{
    "id": 3,
    "name": "Bat Man",
    "yearOfBirth": 1976,
    "gear": "batmobile",
    "costume": "black body armor and cape"
}
```

### PUT
update or add a superhero

PUT /api/superhero/3

server is given a json object and returned a status object.
if the superhero with the given number does not exist, it will
be added. If the superhero exists, then it will be updated.
The id must match the number give in the URI

### DELETE
remove a superhero

DELETE /api/superhero/3

deletes superhero number 3 and returns a status object

# javascript (fetch)

Let's assume `cors` situation:

###  GET
```js
const option={
    method:'GET',
    mode: *´'cors'
}


const oneSuperheros = 'http://localhost:5000/api/superhero/2';
const data = await fetch(oneSuperhero, options);
const result = await data.json(); 

const allSuperheros = 'http://localhost:5000/api/superheros';
const data2 = await fetch(allSuperhero, options);
const result = await data2.json(); 
```
### POST and PUT

```js
const superheroObject = {
    "id": 3,
    "name": "Bat Man",
    "yearOfBirth": 1976,
    "gear": "batmobile",
    "costume": "black body armor and cape"
}

const option={
    method:'POST',
    mode: 'cors'
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify(superheroObject);
}

const postSuperhero = 'http://localhost:5000/api/superheros';
const data = await fetch(oneSuperhero, options);
const result = await data.json(); 

const option={
    method:'PUt',
    mode: 'cors'
    headers:{'Content-Type' : 'application/json'},
    body: JSON.stringify(superheroObject);
}

const putSuperheros = 'http://localhost:5000/api/superheros/2';
const data2 = await fetch(allSuperhero, options);
const result = await data2.json(); 

```

### DELETE
```js
const option={
    method:'DELETE',
    mode: *´'cors'
}

const deleteSuperheros = 'http://localhost:5000/api/superhero/2';
const data = await fetch(oneSuperhero, options);
const result = await data.json(); 
```