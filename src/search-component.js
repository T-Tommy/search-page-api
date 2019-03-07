import { writeSearchToQuery } from './hash-query.js';
const form = document.getElementById('form');
const searchInput = document.getElementById('search');


form.addEventListener('submit', event => {
    event.preventDefault();
    
    const searchTerm = searchInput.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});