const Account = () => {
  return (
    <div>
      <h2>Account</h2>
      <button id="create">Créer un compte</button>
      <div>
        <label htmlFor="login">Login</label>
        <input type="text" id="login" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <input type="submit" value="Se connecter" />
    </div>
  );
};

export default Account;