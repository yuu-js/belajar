async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const names = data.map(item => item.name);

        console.log(names);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();