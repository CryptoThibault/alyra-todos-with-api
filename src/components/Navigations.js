import { Link } from 'react-router-dom'

const Navigations = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todos">Todos App</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigations;