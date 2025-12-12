import PropTypes from 'prop-types';
import styles from './UserGreeting.module.css';

function UserGreeting(props) {
    const displayName = props.name || "Guest";
    const welcomeMessage = <h2 className={styles.welcome}>Welcome, {displayName}!</h2>

    const loginMessage = <h2 className={styles.loginPrompt}>Please log in to continue.</h2>

    return (
        <div>
            {props.isLoggedIn ? welcomeMessage : loginMessage}
        </div>
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    name: PropTypes.string
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    name: "Guest"
}

export default UserGreeting;