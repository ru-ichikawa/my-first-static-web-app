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
      <a href="/.auth/logout?post_logout_redirect_uri=https://b2cdemo0915ri.b2clogin.com/b2cdemo0915ri.onmicrosoft.com/oauth2/v2.0/logout?p=B2C_1_swa_susi&post_logout_redirect_uri=https://proud-water-05bcc2d00.1.azurestaticapps.net/.auth/login/b2c/callback">Logout</a>
    </div>
  </div>;
}

export default App;
