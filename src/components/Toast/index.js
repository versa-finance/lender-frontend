import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';


const Toast = (props) => {
    return (
        <div>
            <ToastsContainer store={ToastsStore}/>
        </div>
    );
};


export default Toast;