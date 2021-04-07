GET: https://intense-stream-90411.herokuapp.com/auth/user

> Authentication: Bearer _token_

RESPONSE 200:

>

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

>

      body: {
            "email": "test@gmail.com",
            "password": "hello!"
            }

RESPONSE 201:

>

=======

GET: https://intense-stream-90411.herokuapp.com/auth/user

> Authentication: Bearer _token_

RESPONSE 200:

>

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

>

      body: {
            "email": "test@gmail.com",
            "password": "hello!"
            }

RESPONSE 201:

> > > > > > > 61a366abafcee61d115057f1e1045ca09ea7e9d5

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
<<<<<<< HEAD

>

=======

> > > > > > > 61a366abafcee61d115057f1e1045ca09ea7e9d5

      body: {
            "email": "test@gmail.com",
            "password": "hello!"
      }

<<<<<<< HEAD

RESPONSE 200:

>

=======

RESPONSE 200:

> > > > > > > 61a366abafcee61d115057f1e1045ca09ea7e9d5

      {
            "status": "success",
            "code": 200,
            "data": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmFjOGI4OTEyZWU0YTc4M2YzZWNmOSIsImlhdCI6MTYxNzYxMTAyOSwiZXhwIjoxNjE3NjE4MjI5fQ.B4ZQgV6hrZp8RhR-KnBkV1Rw9jSR7QIXA-OSna-H24I",
            "email": "test@gmail.com",
            "name": "test"
            }
      }

<<<<<<< HEAD

POST: https://intense-stream-90411.herokuapp.com/auth/logout

>

      Authentication: Bearer *token*

RESPONSE 204:

>

      {
      }

GET: https://intense-stream-90411.herokuapp.com/tests/technicalQA

RESPONSE 200:

>

=======

POST: https://intense-stream-90411.herokuapp.com/auth/logout

>

      Authentication: Bearer *token*


RESPONSE 204:

>

      {
      }


GET: https://intense-stream-90411.herokuapp.com/tests/technicalQA

RESPONSE 200:

> > > > > > > 61a366abafcee61d115057f1e1045ca09ea7e9d5

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
      }

<<<<<<< HEAD

GET: https://intense-stream-90411.herokuapp.com/tests/testingTheory

RESPONSE 200:

>

=======

GET: https://intense-stream-90411.herokuapp.com/tests/testingTheory

RESPONSE 200:

> > > > > > > 61a366abafcee61d115057f1e1045ca09ea7e9d5

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

<<<<<<< HEAD

> > > > > > > # 61a366abafcee61d115057f1e1045ca09ea7e9d5
> > > > > > >
> > > > > > > 61a366abafcee61d115057f1e1045ca09ea7e9d5
