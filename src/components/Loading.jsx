import '@/styles/loading.scss';

const Loading = ({small = false}) => {
    return (
        <div className={`loading ${small ? 'small' : ''}`}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;