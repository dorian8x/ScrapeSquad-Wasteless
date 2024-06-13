// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const login = async (email, password) => {
  const payload = {
    email: email,
    password: password,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(`${BACKEND_URL}/tokens`, requestOptions);
  if (response.status === 201) {
    let data = await response.json();
    return data;
  } else {
    throw new Error(
      `Received status ${response.status} when logging in. Expected 201`
    );
  }
};

export const signup = async (username, email, password) => {
  const passwordValidator = (password) => {
    const regexLength = /^.{8,}$/;
    const regexCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const regexNumber = /^(?=.*\d).+$/;
    if (regexLength.test(password) === false) {
        throw new Error("Password must be 8+ characters")
    } else if (regexCase.test(password) === false) {
        throw new Error("Password must contain at least one uppercase and one lowercase letter")
    } else if (regexNumber.test(password) === false) {
        throw new Error("Password must contain at least one number")
    }
  };
  passwordValidator(password);
  
  const payload = {
    username: username,
    email: email,
    password: password,
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  let response = await fetch(`${BACKEND_URL}/users`, requestOptions);
  if (response.status === 201) {
    return;
  } else {
    throw new Error(
      `Received status ${response.status} when signing up. Expected 201`
    );
  }
};
