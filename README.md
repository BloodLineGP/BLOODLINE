# BLOODLINE

Overview:
BloodLine is a dedicated platform designed to connect blood donors with individuals in need of specific blood types. The platform focuses on streamlining the blood donation process by incorporating real-time chat functionality using WebSocket technology. BloodLine aims to bridge the gap between donors and recipients, ensuring a swift and efficient exchange of information and assistance during critical times.

Real-time Chat with WebSocket:
• BloodLine integrates WebSocket technology to facilitate real-time communication between donors and recipients.
• Instant messaging allows for quick coordination, ensuring timely assistance in emergency situations.

&nbsp;

## Models :

_User_

```
- id : primary
- username : string, required
- birthdate: date
- password : string, required, length min 5
```

_Post_

```
- id : primary
- name: string, required
- description: string, required
- publishDate: date, default: new Date()
- bloodType: string, required
- location: string, required
- status: string, required
- contact: string, required
- postType: string, required
- UserId: integer, required
```

&nbsp;

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /google-login`

Routes below need authentication:

- `GET /posts`
- `GET /posts/mypost`
- `GET /posts/request`
- `GET /posts/donor`
- `GET /posts/:id`
- `POST /posts`

Routes below need authentication & authorizaton:

- `PUT /posts/:id`
- `DELETE /posts/:id`

&nbsp;

## 1. POST /register

Request:

- body

```json
{
  "username": "string",
  "password": "string",
  "birthdate": "date"
}
```

_Response (201 - Created)_

```json
{
  "message": "Success Register"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Please enter Username"
}
OR
{
  "message": "Please enter password"
}
```

## 2. POST /login

Request:

- body

```json
{
  "username": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Access Granted",
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Please input username and password"
}
OR
{
  "message": "Incorrect Username/Password"
}
```

## 3. POST /google-login

## 4. GET /posts

Request:

- headers:

```json
{
  "authorization": "string"
}
```

- login:

```json
{
  "id": "integer",
  "username": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Post retrieved",
    "data": [
        {
            "id": 10,
            "name": "Mamie Taber",
            "description": "Painful micturition, unspecified",
            "publishDate": "2023-11-12T00:00:00.000Z",
            "bloodType": "AB Negative",
            "location": "2 Gale Park",
            "status": "Urgent",
            "contact": "726-738-2176",
            "postType": "Volunteer",
            "UserId": 1,
            "createdAt": "2023-11-21T08:18:25.060Z",
            "updatedAt": "2023-11-21T08:18:25.060Z",
            "User": {
                "id": 1,
                "username": "halosatu",
                "birthdate": "1976-12-01T00:00:00.000Z",
                "createdAt": "2023-11-21T08:18:24.805Z",
                "updatedAt": "2023-11-21T08:18:24.805Z"
            }
        },
        ...,
    ]
}
```

## 5. GET /posts/mypost

Request:

- headers:

```json
{
  "authorization": "string"
}
```

- login:

```json
{
  "id": "integer",
  "username": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Post retrieved",
    "data": [
        {
            "id": 10,
            "name": "Mamie Taber",
            "description": "Painful micturition, unspecified",
            "publishDate": "2023-11-12T00:00:00.000Z",
            "bloodType": "AB Negative",
            "location": "2 Gale Park",
            "status": "Urgent",
            "contact": "726-738-2176",
            "postType": "Volunteer",
            "UserId": 1,
            "createdAt": "2023-11-21T08:18:25.060Z",
            "updatedAt": "2023-11-21T08:18:25.060Z",
            "User": {
                "id": 1,
                "username": "halosatu",
                "birthdate": "1976-12-01T00:00:00.000Z",
                "createdAt": "2023-11-21T08:18:24.805Z",
                "updatedAt": "2023-11-21T08:18:24.805Z"
            }
        },
        ...,
    ]
}
```

## 6. GET /posts/request

Request:

- headers:

```json
{
  "authorization": "string"
}
```

- login:

```json
{
  "id": "integer",
  "username": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Post retrieved",
    "data": [
        {
            "id": 10,
            "name": "Mamie Taber",
            "description": "Painful micturition, unspecified",
            "publishDate": "2023-11-12T00:00:00.000Z",
            "bloodType": "AB Negative",
            "location": "2 Gale Park",
            "status": "Urgent",
            "contact": "726-738-2176",
            "postType": "Volunteer",
            "UserId": 1,
            "createdAt": "2023-11-21T08:18:25.060Z",
            "updatedAt": "2023-11-21T08:18:25.060Z",
            "User": {
                "id": 1,
                "username": "halosatu",
                "birthdate": "1976-12-01T00:00:00.000Z",
                "createdAt": "2023-11-21T08:18:24.805Z",
                "updatedAt": "2023-11-21T08:18:24.805Z"
            }
        },
        ...,
    ]
}
```

## 7. GET /posts/donor

Request:

- headers:

```json
{
  "authorization": "string"
}
```

- login:

```json
{
  "id": "integer",
  "username": "string"
}
```

_Response (200 - OK)_

```json
{
    "message": "Post retrieved",
    "data": [
        {
            "id": 10,
            "name": "Mamie Taber",
            "description": "Painful micturition, unspecified",
            "publishDate": "2023-11-12T00:00:00.000Z",
            "bloodType": "AB Negative",
            "location": "2 Gale Park",
            "status": "Urgent",
            "contact": "726-738-2176",
            "postType": "Volunteer",
            "UserId": 1,
            "createdAt": "2023-11-21T08:18:25.060Z",
            "updatedAt": "2023-11-21T08:18:25.060Z",
            "User": {
                "id": 1,
                "username": "halosatu",
                "birthdate": "1976-12-01T00:00:00.000Z",
                "createdAt": "2023-11-21T08:18:24.805Z",
                "updatedAt": "2023-11-21T08:18:24.805Z"
            }
        },
        ...,
    ]
}
```

## 8. GET /posts/:id

Request:

- headers:

```json
{
  "authorization": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success Retriving Post 1",
  "postDetail": {
    "id": 1,
    "name": "Konstantine Shone",
    "description": "Infect/inflm reaction due to internal right hip prosthesis",
    "publishDate": "2023-11-12T00:00:00.000Z",
    "bloodType": "B Positive",
    "location": "44 Armistice Circle",
    "status": "Urgent",
    "contact": "901-484-5576",
    "postType": "Request",
    "UserId": 4,
    "createdAt": "2023-11-21T08:18:25.060Z",
    "updatedAt": "2023-11-21T08:18:25.060Z",
    "User": {
      "id": 4,
      "username": "rkernes3",
      "birthdate": "1976-12-01T00:00:00.000Z",
      "password": "$2b$09$OJfe35Jiw/H7FNKYi9t3f.XOLSB2fVww1Zx1qXkAD1d0O9rDiAMJa",
      "createdAt": "2023-11-21T08:18:24.888Z",
      "updatedAt": "2023-11-21T08:18:24.888Z"
    }
  }
}
```

## 9. POST /posts

Request:

- headers:

```json
{
  "authorization": "string"
}
```

- login:

```json
{
  "id": "integer",
  "username": "string"
}
```

- body:

```json
{
  "name": "string",
  "description": "string",
  "publishDate": "date",
  "bloodType": "string",
  "location": "string",
  "status": "string",
  "contact": "string",
  "postType": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Successfully created new post",
  "newPost": {
    "id": 32,
    "name": "TEST2",
    "description": "This is a posting test",
    "publishDate": "2023-11-21T08:44:30.770Z",
    "bloodType": "B-",
    "location": "BSD",
    "status": "Urgent",
    "contact": "088888888",
    "postType": "RECIPIENT",
    "UserId": 1,
    "updatedAt": "2023-11-21T08:44:30.769Z",
    "createdAt": "2023-11-21T08:44:30.769Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Please enter your name"
}
OR
{
  "message": "Please enter post description"
}
OR
{
  "message": "Please enter your blood type"
}
OR
{
  "message": "Please enter your location"
}
OR
{
  "message": "Please specify the level of urgency"
}
OR
{
  "message": "Please enter your contact"
}
OR
{
  "message": "Please specify post as DONOR or RECIPIENT"
}
```

## 10. PUT /posts/:id

Request :

- headers

```json
{
  "authorization": "string"
}
```

- params

```json
{
  "id": "string"
}
```

- body

```json
{
  "name": "string",
  "description": "string",
  "publishDate": "date",
  "bloodType": "string",
  "location": "string",
  "status": "string",
  "contact": "string",
  "postType": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Update post success",
  "data": "Id 38"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Post not found"
}
```

## 11. DELETE /posts/:id

Request :

- headers

```json
{
  "authorization": "string"
}
```

- params

```json
{
  "id": "string"
}
```

- body

```json
{
  "name": "string",
  "description": "string",
  "publishDate": "date",
  "bloodType": "string",
  "location": "string",
  "status": "string",
  "contact": "string",
  "postType": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Deletion of post id 38",
  "post": {
    "id": 38,
    "name": "TEST2",
    "description": "This is a posting test",
    "publishDate": "2023-11-22T23:06:09.341Z",
    "bloodType": "B-",
    "location": "BSD",
    "status": "Urgent",
    "contact": "088888888",
    "postType": "RECIPIENT",
    "UserId": 1,
    "createdAt": "2023-11-22T23:06:09.340Z",
    "updatedAt": "2023-11-22T23:06:36.899Z"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Post not found"
}
```

## Global Error

_Response (401 - JsonWebTokenError)_

```json
{
  "message": "jwt must be provided"
}
```

_Response (401 - Unauthenticated)_

```json
{
  "message": "Authentication Failed"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden, access not allowed"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```
