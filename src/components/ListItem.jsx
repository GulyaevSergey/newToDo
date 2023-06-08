import { Component } from "react";

export class ListItem extends Component {

	render () {
	
		const {task, onToggleDone, onToggleImportant, deleteItem} = this.props

		let classNameItem = "todo-item"

		if (task.important) {
			classNameItem += " important"
		}
		if (task.done){
			classNameItem += " done"
		}

		return (
			<li className={classNameItem}>
			<span onClick={()=>{onToggleDone(task.id)}}className="todo-item-text">{task.title}</span>
			<div className="btn-group">
				<button onClick={()=>{onToggleImportant(task.id)}} role="button" className="btn btn-outline-dark btn-sm">
					Важное
				</button>
				<button onClick={()=>{deleteItem(task.id)}} role="button" className="btn btn-outline-danger btn-sm">
					Удалить
				</button>
			</div>
		</li>
		)
	}
} 