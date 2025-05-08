import React, { useState } from 'react';

export const Change = () => {
  // State for storing all users
  const [users, setUsers] = useState([
    { id: 1001, name: "John Doe", sex: "Male", email: "john@example.com" }
  ]);
  
  // State for the form inputs (single object, not array)
  const [newUser, setNewUser] = useState({
    name: "",
    sex: "",
    email: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewUser({
      ...newUser,
      [id]: value
    });
  };

  // Add a new user on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a new ID based on the last user's ID
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1001;
    
    // Create new user object
    const inputUser = {
      id: newId,
      name: newUser.name,
      sex: newUser.sex,
      email: newUser.email
    };
    
    // Add new user to the users array
    setUsers([...users, inputUser]);
    
    // Reset form
    setNewUser({ name: "", sex: "", email: "" });
  };

  // Delete a user
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">User Management System</h1>
        
        {/* User Form */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Add New User</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-white mb-1">Name</label>
              <input
                required
                type="text"
                id="name"
                value={newUser.name}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter name"
              />
            </div>
            
            <div>
              <label htmlFor="sex" className="block text-white mb-1">Gender</label>
              <select
                id="sex"
                value={newUser.sex}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                required
                type="email"
                id="email"
                value={newUser.email}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter email"
              />
            </div>
          </div>
          
          <button 
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 bg-indigo-800 text-white rounded hover:bg-indigo-900 transition-colors shadow-md transform hover:scale-105 duration-200"
          >
            Add User
          </button>
        </div>
        
        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-4 bg-blue-800 text-white">User Directory</h2>
          
          {users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">ID</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Name</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Gender</th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">Email</th>
                    <th className="py-3 px-4 text-center font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr 
                      key={user.id} 
                      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="py-3 px-4 border-b border-gray-200">{user.id}</td>
                      <td className="py-3 px-4 border-b border-gray-200">{user.name || "N/A"}</td>
                      <td className="py-3 px-4 border-b border-gray-200">{user.sex || "N/A"}</td>
                      <td className="py-3 px-4 border-b border-gray-200">{user.email || "N/A"}</td>
                      <td className="py-3 px-4 border-b border-gray-200 text-center">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="p-4 text-gray-500">No users available</p>
          )}
          
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600 text-sm">Total Users: {users.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};