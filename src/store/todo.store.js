
import { Todo } from "../todos/models/todo.model";

const Filters = {

    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Acabar curso de javascript'),
        new Todo('Acabar curso de node.js'),
        new Todo('Acabar curso de Flutter')
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log(state);
    console.log('InitStore')
}



const loadStore = () => {

}


/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {


}

const toggleTodo = (todoId) => {


}

const deleteTodo = (todoId) => {

}

const deleteCompleted = () => {


}

const setFilter = (newFilter = Filters.All) => {

}

const getCurrentFilter = () => {

}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
}