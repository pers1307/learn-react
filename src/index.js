import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

    /**
     * Определение конструктора
     * @param props
     */
    constructor(props) {

        super(props);

        this.state = {
            text : 'test'
        };
    }

    /**
     * Валидация полей
     * @type {{btnText: *, h1Text: *}}
     */
    static proptypes = {
        // btnText : React.PropTypes.string.isRequired,
        btnText : PropTypes.string.isRequired,
        h1Text  : React.PropTypes.string.isRequired,
        newArray : React.PropTypes.array.isRequired
    };

    /**
     * Значение полей по умолчанию
     * @type {{btnText: string, h1Text: string}}
     */
    static defaultProps = {
        btnText : 'Default props text',
        h1Text  : 'wow'
    };

    /**
     * Привязка событий
     * @param event
     */
    btnOnClick(event) {

        console.log('Button Clicked');
        console.log(event.target);
    }

    onChange(event) {

        const text = event.target.value;

        this.setState({text});

        console.log(event.target.value);
    }

    /**
     * Функция рендеринга
     * @returns {XML}
     */
    render() {

        console.log('Props', this.props);
        console.log('array', this.props.newArray);

        return (
            <div className="test" style={{backgroundColor : 'red'}}>
                <h1>{this.props.h1Text}</h1>
                <h3>Wow!</h3>
                <button onClick={this.btnOnClick}>Click {this.props.children} {this.props.btnText || 'Default text'}</button>
                <input type="text" value={this.state.text} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}

/**
 * Вставка непосредственно в DOM
 */
ReactDom.render(
    <App btnText="click on me!" h1Text="App works" newArray={[1, 2, 3]}>It's prop</App>,
    document.getElementById('app')
);