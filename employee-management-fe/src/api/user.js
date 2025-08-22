const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YTVjMGI2ZTE4MDhhMGIzMTYwZWNhZCIsInVzZXJuYW1lIjoiRmFubnkxMjMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTU4Njc3NTksImV4cCI6MTc1NTg3MTM1OX0.j2BnvK-OGpGY4UuDqVREqiL8WUTt3Cpet5q2SAVctLU";

const getUser = async () => {
  try {
    const res = await fetch("http://localhost:3000", {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      method: "GET",
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

const addUser = async (username, password, role) => {
  const payload = {
    username,
    password,
    role,
  };

  // prevent null or undefined values
  Object.keys(payload).forEach((key) => {
    if (payload[key] === null || payload[key] === undefined) {
      delete payload[key];
    }
  });

  try {
    const res = await fetch("http://localhost:3000", {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
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

const updateUser = async (id, username, role) => {
  const payload = {
    id,
    username,
    role,
  };

  // prevent null or undefined values
  Object.keys(payload).forEach((key) => {
    if (payload[key] === null || payload[key] === undefined) {
      delete payload[key];
    }
  });

  try {
    const res = await fetch(`http://localhost:3000`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      method: "PATCH",
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

const deleteUser = async (id) => {
  id = id ? { id } : {};

  try {
    const res = await fetch(`http://localhost:3000`, {
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      method: "DELETE",
      body: JSON.stringify(id),
    });

    const data = await res.json(id);

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

export { getUser, addUser, updateUser, deleteUser };
