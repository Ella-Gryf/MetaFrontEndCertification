import {FaRegTimesCircle} from 'react-icons/fa';
import './Popup.css';

const Popup = ({ msg, onClose }) => {

  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <div className='close' onClick={onClose}>
          <FaRegTimesCircle className='btn-icon' />
        </div>
        <p className='lead-text'>{msg}</p>
      </div>
    </div>
  );
};

export default Popup;