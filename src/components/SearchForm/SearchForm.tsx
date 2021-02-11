import React from 'react'
import styles from './SearchForm.module.css'

class SearchForm extends React.Component<any, any> {

    constructor(props: any) {
        super(props)

        this.state = {
            value: ''
        }

        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(key: string) {
        if (key === 'Enter') {
            this.props.submit(this.state.value)
            this.setState({value: ''})
        }
    }

    render() {
        return (
            <input
                onKeyPress={(e) => this.submitHandler(e.key)}
                onChange={(e) => this.setState({value: e.target.value})}
                value={this.state.value}
                type="text"
                placeholder={this.props.isEnglish ? 'Choose place' : 'Выберите место'}
                className={styles.input}
            />
        )
    }
}

export default SearchForm
