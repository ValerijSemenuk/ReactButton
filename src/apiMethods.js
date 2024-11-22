export const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    return data.data; 
  };
  
  export const deleteUser = async (id) => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
    });
  };
  