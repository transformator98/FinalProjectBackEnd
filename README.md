GET: https://intense-stream-90411.herokuapp.com/auth/user

Authentication: Bearer token

RESPONSE 200:

{
"status": 200,
"data": {
"email": "test@gmail.com",
"name": "test",
"avatar": "https://s.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=250",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmFjOGI4OTEyZWU0YTc4M2YzZWNmOSIsImlhdCI6MTYxNzYxMTE2MywiZXhwIjoxNjE3NjE4MzYzfQ.QUge2wSHuzmPSDMobEdn7jmRv4HzxNaXMynZAdpyqnE"
}
}
POST: https://intense-stream-90411.herokuapp.com/auth/register

body: {
"email": "test@gmail.com",
"password": "hello!"
}
RESPONSE 201:

{
"status": "success",
"code": 201,
"data": {
"email": "test@gmail.com",
"name": "test",
"avatar": "https://s.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?s=250"
}
}
POST: https://intense-stream-90411.herokuapp.com/auth/login

body: {
"email": "test@gmail.com",
"password": "hello!"
}
RESPONSE 200:

{
"status": "success",
"code": 200,
"data": {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmFjOGI4OTEyZWU0YTc4M2YzZWNmOSIsImlhdCI6MTYxNzYxMTAyOSwiZXhwIjoxNjE3NjE4MjI5fQ.B4ZQgV6hrZp8RhR-KnBkV1Rw9jSR7QIXA-OSna-H24I",
"email": "test@gmail.com",
"name": "test"
}
}
POST: https://intense-stream-90411.herokuapp.com/auth/logout

Authentication: Bearer _token_
RESPONSE 204:

{
}
GET: https://intense-stream-90411.herokuapp.com/tests/technicalQA

RESPONSE 200:

{
"status": "success",
"code": 200,
"data": [{
"question": "How many testing principles are there?",
"questionId": 1,
"answers": ["5", "6", "7", "8", "9", "I don't know"],
"rightAnswer": "7"
}, {}, ...]
}
GET: https://intense-stream-90411.herokuapp.com/tests/testingTheory

RESPONSE 200:

{
"status": "success",
"code": 200,
"data": [{
"question": "What does 'CI' stands for in QA?",
"questionId": 1,
"answers": ["Connection interface", "Nothing", "Continuous Integration", "Centiliter"],
"rightAnswer": "Continuous Integration"
}, {}, ...]
}
POST: https://intense-stream-90411.herokuapp.com/tests/technicalQA

Authentication: Bearer token

RESPONSE 201:

{
"status": "success",
"code": 201,
"data": {
"type": "technicalQA",
"questions": [
{
"_id": "606f0c227bf51409ac9c8132",
"questionId": 1,
"question": "What is formal testing",
"answer": "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
"rightAnswer": false
},
{
"_id": "606f0c227bf51409ac9c8132",
"questionId": 2,
"question": "What is formal testing",
"answer": "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
"rightAnswer": true
}, {}, ...
],
"total": 4,
"correctAnswers": 1,
"owner": "606efa69db7ca41050be1c25",
"email": "test@gmail.com"
"name": "test"

        }

}
DELETE: https://intense-stream-90411.herokuapp.com/tests/technicalQA/result

Authentication: Bearer token

RESPONSE 200:

{
"status": "success",
"code": 200,
"message": "Results deleted"
}
POST: https://intense-stream-90411.herokuapp.com/tests/testingTheory

Authentication: Bearer token

RESPONSE 201:

{
"status": "success",
"code": 201,
"data": {
"type": "testingTheory",
"questions": [
{
"_id": "606f0c227bf51409ac9c8132",
"questionId": 1,
"question": "What is formal testing",
"answer": "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
"rightAnswer": false
},
{
"_id": "606f0c227bf51409ac9c8132",
"questionId": 2,
"question": "What is formal testing",
"answer": "Verification of software, according to the test plan, test procedures and relevant documentation, taking into account the wishes of the client",
"rightAnswer": true
}, {}, ...
],
"total": 4,
"correctAnswers": 1,
"owner": "606efa69db7ca41050be1c25",
"email": "test@gmail.com"
"name": "test"

        }

}
DELETE: https://intense-stream-90411.herokuapp.com/tests/testingTheory/result

Authentication: Bearer token

RESPONSE 200:

{
"status": "success",
"code": 200,
"message": "Results deleted"
}
POST: https://intense-stream-90411.herokuapp.com/emails

RESPONSE 200:

{
"message": "Email successfully sent!"
}
GET: https://intense-stream-90411.herokuapp.com/emails

RESPONSE 200:

HTML PAGE
