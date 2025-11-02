# 🧪 Postman Testing Links & Instructions

## 🚀 Quick Setup

### 1. Start Your Backend Server
```bash
cd exam-template/backend
npm install
npm run dev
```

**Expected Output:**
```
🚀 Server running on http://localhost:5000
📡 API Documentation: http://localhost:5000
🔐 JWT Secret: exam_templ...
```

### 2. Test Server Health
**Open in browser:** http://localhost:5000

## 📡 Direct API Testing Links

### 🔐 Authentication Endpoints

#### 1. Health Check
- **Method:** `GET`
- **URL:** `http://localhost:5000/`
- **Headers:** None required
- **Expected:** Server info and available endpoints

#### 2. Register User
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/auth/register`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Body (JSON):**
  ```json
  {
    "email": "test@example.com",
    "password": "password123",
    "role": "User Role 1"
  }
  ```
- **Expected Response:**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "user": {
      "id": "1635789012345",
      "email": "test@example.com",
      "role": "User Role 1",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

#### 3. Login User
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/auth/login`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Body (JSON):**
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```

#### 4. Get Profile (Protected)
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/auth/profile`
- **Headers:** 
  ```
  Authorization: Bearer YOUR_JWT_TOKEN_HERE
  Content-Type: application/json
  ```

#### 5. Verify Token
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/auth/verify`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Body (JSON):**
  ```json
  {
    "token": "YOUR_JWT_TOKEN_HERE"
  }
  ```

### 📝 Form Endpoints

#### 6. Submit Form (Protected)
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/forms/submit`
- **Headers:** 
  ```
  Authorization: Bearer YOUR_JWT_TOKEN_HERE
  Content-Type: application/json
  ```
- **Body (JSON):**
  ```json
  {
    "projectTitle": "Test Project via Postman",
    "category": "Category A",
    "description": "This is a test project submitted via Postman API",
    "priority": "High",
    "startDate": "2024-01-15",
    "budget": 5000,
    "tags": "test, postman, api",
    "notes": "Additional notes for testing"
  }
  ```

#### 7. Get My Submissions (Protected)
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/forms/submissions`
- **Headers:** 
  ```
  Authorization: Bearer YOUR_JWT_TOKEN_HERE
  ```

#### 8. Get All Submissions (Admin)
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/forms/all-submissions`
- **Headers:** 
  ```
  Authorization: Bearer YOUR_JWT_TOKEN_HERE
  ```

## 🔧 Step-by-Step Postman Testing

### Step 1: Import Collection (Recommended)
1. **Download Collection:** `ExamTemplate-API.postman_collection.json`
2. **Open Postman** → Click "Import"
3. **Select file** → Import collection
4. **Import Environment:** `ExamTemplate-Environment.postman_environment.json`
5. **Select Environment** in top-right dropdown

### Step 2: Manual Testing Workflow

#### Test 1: Register New User
1. **Create New Request** in Postman
2. **Set Method:** POST
3. **Set URL:** `http://localhost:5000/api/auth/register`
4. **Add Header:** `Content-Type: application/json`
5. **Add Body (raw JSON):**
   ```json
   {
     "email": "postman@test.com",
     "password": "test123",
     "role": "User Role 2"
   }
   ```
6. **Click Send**
7. **Copy JWT token** from response

#### Test 2: Login User
1. **New Request:** POST
2. **URL:** `http://localhost:5000/api/auth/login`
3. **Header:** `Content-Type: application/json`
4. **Body:**
   ```json
   {
     "email": "postman@test.com",
     "password": "test123"
   }
   ```
5. **Send** → Copy new JWT token

#### Test 3: Access Protected Route
1. **New Request:** GET
2. **URL:** `http://localhost:5000/api/auth/profile`
3. **Add Header:** `Authorization: Bearer YOUR_TOKEN_HERE`
4. **Send** → Should return user profile

#### Test 4: Submit Form
1. **New Request:** POST
2. **URL:** `http://localhost:5000/api/forms/submit`
3. **Headers:**
   - `Authorization: Bearer YOUR_TOKEN_HERE`
   - `Content-Type: application/json`
4. **Body:**
   ```json
   {
     "projectTitle": "Postman Test Project",
     "category": "Testing",
     "description": "Testing form submission via Postman",
     "priority": "Medium"
   }
   ```
5. **Send** → Should create form submission

## 🧪 Error Testing

### Test Invalid Credentials
- **URL:** `http://localhost:5000/api/auth/login`
- **Body:** 
  ```json
  {
    "email": "wrong@email.com",
    "password": "wrongpass"
  }
  ```
- **Expected:** `401 Unauthorized`

### Test Missing Token
- **URL:** `http://localhost:5000/api/auth/profile`
- **Headers:** None (no Authorization header)
- **Expected:** `401 Unauthorized`

### Test Invalid Token
- **URL:** `http://localhost:5000/api/auth/profile`
- **Headers:** `Authorization: Bearer invalid_token`
- **Expected:** `403 Forbidden`

## 📋 Quick Test Checklist

- [ ] ✅ Server health check works
- [ ] ✅ User registration returns JWT token
- [ ] ✅ User login returns JWT token
- [ ] ✅ Profile endpoint works with valid token
- [ ] ✅ Profile endpoint fails without token
- [ ] ✅ Form submission works with token
- [ ] ✅ Get submissions returns user data
- [ ] ✅ Invalid credentials are rejected
- [ ] ✅ Invalid tokens are rejected

## 🔗 Quick Copy-Paste URLs

```
Health Check:
http://localhost:5000/

Register:
http://localhost:5000/api/auth/register

Login:
http://localhost:5000/api/auth/login

Profile:
http://localhost:5000/api/auth/profile

Verify Token:
http://localhost:5000/api/auth/verify

Submit Form:
http://localhost:5000/api/forms/submit

Get Submissions:
http://localhost:5000/api/forms/submissions

All Submissions:
http://localhost:5000/api/forms/all-submissions
```

## 🎯 Pro Tips

### Auto-Extract Token
Add this to your Login request's **Tests** tab:
```javascript
if (pm.response.code === 200) {
    const response = pm.response.json();
    pm.environment.set("auth_token", response.token);
    console.log("Token saved:", response.token);
}
```

### Use Environment Variables
- Set `{{base_url}}` = `http://localhost:5000`
- Set `{{auth_token}}` = Your JWT token
- Use `{{base_url}}/api/auth/login` in URLs
- Use `Bearer {{auth_token}}` in Authorization headers

## 🚨 Troubleshooting

### Server Not Running
**Error:** `Could not get any response`
**Solution:** Make sure backend server is running on port 5000

### CORS Error
**Error:** `Access blocked by CORS policy`
**Solution:** Server has CORS enabled, but check if port is correct

### Invalid Token
**Error:** `403 Forbidden`
**Solution:** Make sure you're using the latest token from login response

### Network Error
**Error:** `Network Error`
**Solution:** Check if `http://localhost:5000` is accessible in browser

Start testing and let me know if you need help with any specific endpoint! 🚀