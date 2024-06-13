import './DroppedWidget.css';

function DroppedWidget({ widget, index, onRemove }) {
    return (
        <div className="dropped-widget">
            {widget}
            <button onClick={() => onRemove(index)}>X</button>
        </div>
    );
}

export default DroppedWidget;
