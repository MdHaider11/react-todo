import React from 'react';

export default function TodoForm(props) {
	return (
		<div>
			{props.editCheck ? (
				<form onSubmit={props.updateTodoForm}>
					<div className='todo--form'>
						<input
							type='text'
							onChange={props.todoInput}
							placeholder='Type...'
							value={props.todoFormValue}
						/>
						<input type='submit' value='Update' />
					</div>
				</form>
			) : (
				<form onSubmit={props.todoForm}>
					<div className='todo--form'>
						<input
							type='text'
							onChange={props.todoInput}
							placeholder='Type...'
							value={props.todoFormValue}
						/>
						<input type='submit' value='Add' />
					</div>
				</form>
			)}
		</div>
	);
}
