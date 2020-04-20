import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TechItem from './TechItem'
import { getTechs } from '../../actions/techActions'

const TechListModal = ({ getTechs, tech: { techs, loading} }) => {
    // const [techs, setTechs] = useState([]); // we no longer need component level state
    // const [loading, setLoading] = useState(false); // we are passing app level state

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    // const getTechs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/techs');
    //     const data = await res.json();

    //     setTechs(data);
    //     setLoading(false);  
    // }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs !== null && techs.map(
                        tech => (
                            <TechItem tech={tech}  key={tech.id}/>
                        )
                    )}
                </ul>
            </div>

        </div>
    );
};

TechListModal.propType = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, {getTechs})(TechListModal);
