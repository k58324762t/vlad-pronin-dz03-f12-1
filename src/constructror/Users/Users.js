export const Users = props => {
	return (
		<>
			<ul>
				{props.user.map((user, key) => {
					return (
						<li
							style={{ marginBottom: '25px', listStyleType: 'none' }}
							key={key}
						>
							<div>name:{user.name}</div>
							<div>age:{user.age}</div>
							<div>position:{user.position}</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}
