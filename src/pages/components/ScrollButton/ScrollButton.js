import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
class ScrollButton extends React.Component {
    constructor() {
        super();
        this.state = {
            intervalId: 0
        };
    }
    
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }
    
    render () {
        return (
            <button 
                title='Back to top' 
                className='scroll' 
                onClick={ () => { this.scrollToTop(); }}>
                <span className='go-up'>
                    <FontAwesomeIcon className="icon" icon={faArrowUp}/>
                </span>
            </button>
        )
    }
} 
export default ScrollButton