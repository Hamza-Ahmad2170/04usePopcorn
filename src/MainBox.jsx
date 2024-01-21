import PropTypes from 'prop-types'

MainBox.propTypes = {
  children: PropTypes.array
}


function MainBox({ children }) {
  return <main className="main">{children}</main>;
}

export default MainBox