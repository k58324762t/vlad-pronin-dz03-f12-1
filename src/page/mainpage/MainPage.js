import React from 'react'

class MainPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }

		this.onChangeInt = this.onChangeInt.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChangeInt(e) {
		this.setState({ value: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault()
	}

	render() {
		return (
			<>
				<from>
					<input
						type='text'
						value={this.state.value}
						onChange={this.onChangeInt}
					/>
					<button type='submit' onClick={this.onSubmit}>
						отправить
					</button>
				</from>
			</>
		)
	}
}
export default MainPage
