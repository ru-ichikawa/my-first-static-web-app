import React from 'react';

function App() {
  const value = 'World';
  return <div>
    Hello {value}
    <div>
      <a href="/.auth/login/b2c/callback">Login</a>
    </div>
    <div>
      <a href="/.auth/me">My Info</a>
    </div>
    <div>
      <a href="/.auth/logout">Logout</a>
    </div>
  </div>;
}

export default App;
