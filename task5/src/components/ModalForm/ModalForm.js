import React from 'react'
import './ModalForm.css'


function ModalForm({task, closeModal, onSave, onChange}) {

	function onValueChange(e) {
        const changes = {
            title: e.target.value
        };
        onChange(changes);
    }

	const onFormSubmit = (e) => {
		e.preventDefault();
		
		onSave(task);
		closeModal();
	}

	const onModalClose = () => {
		task.title = '';
		task.id = '';
		closeModal();
	}

	return (
		<form onSubmit={onFormSubmit} className="formStyle">
			<input type="text"
				name="title"
				value={task.title}
				onChange={onValueChange}
				placeholder="type some task..."
				className="formInput">
			</input>
		
			<div className="formButtonsWrap">
				<button className="formButton cancel" onClick={onModalClose}>Cancel</button>
				<button className="formButton save" type="submit">Save</button>
			</div>
			
		</form>
	)
}

const modalBodyStyle = {
	color: "red"
}

const modalFooterStyle = {
	backgroundColor: "yellow",
	display: "flex",
	justifyContent: "space-between"
}


export default ModalForm
