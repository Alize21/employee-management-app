const loginUser = async (username, password) => {
  const payload = {
    username,
    password,
  };

  // prevent null or undefined values
  Object.keys(payload).forEach((key) => {
    if (payload[key] === null || payload[key] === undefined) {
      delete payload[key];
    }
  });

  try {
    const res = await fetch("http://localhost:3000/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      const error = new Error();
      error.message = data.msg || `HTTP error! status: ${res.status}`;
      error.status = data.error;
      throw error;
    }

    return data;
  } catch (err) {
    throw err;
  }
};

export { loginUser };
