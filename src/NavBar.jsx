import PropTypes from 'prop-types'

NavBar.propTypes = {
  children: PropTypes.array
}


function NavBar({ children }) {

  return <nav className="nav-bar">{children}</nav>;
}
export default NavBar;
