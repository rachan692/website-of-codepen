import React, { useContext, useEffect, useState } from 'react';
import Login from './Auth/Login';
import EmployeeDashboard from './Dashboard/EmployeeDashboard';
import AdminDashboard from './Dashboard/AdminDashboard';
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
    setLoading(false);  // Stop loading once the check is done
  }, []);

  const handleLogin = (email, password) => {
    // Check if the user is an admin
    if (email === 'admin@me.com' && password === '123') {
      handleAdminLogin();
    } else if (userData) {
      const employee = userData.employees.find((e) => e.email === email && e.password === password);
      if (employee) {
        handleEmployeeLogin(employee);
      } else {
        console.log('Invalid Credentials');
      }
    }
  };

  const handleAdminLogin = () => {
    setUser('admin');
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
  };

  const handleEmployeeLogin = (employee) => {
    setUser('employee');
    setLoggedInUserData(employee);
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
  };

  // If still loading, show nothing or a loading spinner
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
