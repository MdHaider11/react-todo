import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
	const [GetinputContent, setInputContent] = useState('');
	const [getItem, setItem] = useState([]);
	const [getOption, setOption] = useState({
		editId: null,
		isEdit: false,
	});

	const todoFormSubmit = (e) => {
		e.preventDefault();
		if (GetinputContent !== '') {
			setItem((old) => {
				setItem([
					...old,
					{
						name: GetinputContent,
					},
				]);
			});
		}
		setInputContent('');
	};

	const todoFormUpdate = (e) => {
		e.preventDefault();
		if (GetinputContent !== '') {
			setItem(
				getItem.map((item, index) => {
					if (getOption.editId == index) {
						return { ...item, name: GetinputContent };
					}
					return item;
				})
			);
		}
		setInputContent('');
		getOption.isEdit = false;
	};

	const todoInputBox = (e) => {
		const value = e.target.value;
		setInputContent(value);
	};

	const deleteItemChild = (id) => {
		const item = getItem.filter((item, index) => {
			return id !== index;
		});
		setItem(item);
	};

	const editItemChild = (id) => {
		const name = [...getItem][id].name;
		setInputContent(name);
		setOption({
			editId: id,
			isEdit: true,
		});
	};

	return (
		<div className='todo--bg'>
			<div className='todo--content--box'>
				<h2>Todo Application</h2>
				<TodoForm
					todoForm={todoFormSubmit}
					todoFormValue={GetinputContent}
					todoInput={todoInputBox}
					editCheck={getOption.isEdit}
					updateTodoForm={todoFormUpdate}
				/>
				<TodoList
					item={getItem}
					deleteItem={deleteItemChild}
					editItem={editItemChild}
					buttonCheck={getOption.isEdit}
				/>
			</div>
		</div>
	);
}
