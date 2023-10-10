
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

const getTodos=(filter= Filters.All)=>{
    switch(filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done ===true);
        case Filters.Pending:
            return state.todos.filter(todo => todo.done ===false);
        
        default:
    }          throw new Error(`Option ${filter} is not valid.`);
}


/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {

    if(!description) throw new Error('Description is required');
    state.todos.push( new Todo(description));

}

const toggleTodo = (todoId) => {

    state.todos= state.todos.map(todo =>{
        if(todo.id === todoId){
            todo.done=!todo.done;
        }
        return todo;
    });

}

const deleteTodo = (todoId) => {
    state.todos=state.todos.filter( todo => todo.id !== todoId);
}

const deleteCompleted = () => {
    state.todos=state.todos.filter( todo => todo.done==true);

}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter=newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos
}