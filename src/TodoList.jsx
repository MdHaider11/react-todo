import React from 'react';

export default function TodoList(props) {
	return (
		<div>
			<ul>
				{props.item.map((value, index) => {
					return (
						<li className='df jcb aic' key={index}>
							<h4>{value.name}</h4>
							<div>
								{!props.buttonCheck ? (
									<button
										onClick={() => {
											props.editItem(index);
										}}
									>
										Edit
									</button>
								) : (
									''
								)}
								{!props.buttonCheck ? (
									<button
										onClick={() => {
											props.deleteItem(index);
										}}
									>
										Delete
									</button>
								) : (
									''
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
