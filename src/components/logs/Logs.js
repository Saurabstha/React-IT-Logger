import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions';

const Logs = ({  log: {logs, loading }, getLogs }) => {
    
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);



    if(loading || logs === null) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
    {!loading && logs.length === 0 ? (
        <p className="center">No logs...</p>
    ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
    )}
        </ul>
    );
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired  
}

// if we want to bring anything from app level state into component,, we bring as props
const mapStateToProps = state => ({
    log: state.log // agadiko log key can be anything,, state.log xai reducers/index.js vitrako key of reducer
});

export default connect(mapStateToProps, { getLogs })(Logs); //when we bring an action getLogs and pass as shown, then 
//out action is now props,, so we need to destructure it in function Logs parameter.
