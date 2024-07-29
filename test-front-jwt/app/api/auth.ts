export async function login(email: string, password: string) {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('Response status:', res.status);
    console.log('Response headers:', res.headers);

    if (!res.ok) {
      const errorData = await res.json();
      console.log('Error response data:', errorData);
      throw new Error('Failed to log in');
    }

    const data = await res.json();
    console.log('Response data:', data);

    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}
  
  export async function register(name: string, email: string, password: string) {
    const res = await fetch('http://127.0.0.1:8000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (!res.ok) {
      throw new Error('Failed to register');
    }
  
    return await res.json();
  }
  
  export async function getUserDetails(token: string) {
    const res = await fetch('http://127.0.0.1:8000/api/users/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to get user details');
    }
  
    return await res.json();
  }
  