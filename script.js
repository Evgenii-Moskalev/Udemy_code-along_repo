// -----------------------------------------------Lesson 111
// SET TIMEOUT
// // setTimeout(changeText, 2000);

// // // console.log('Hello from global scope');

// function changeText() {
//     document.querySelector('h1').textContent = 'Hello from callback';
// }

// const timerID = setTimeout(changeText, 3000);

// document.querySelector('#cancel').addEventListener('click', () => {
//     console.log(timerID);
//     clearTimeout(timerID);
//     console.log('timer canceled');
// });

// // -----------------------------------------------Lesson 112
// // SET INTERVAL

// // const intervalID = setInterval(myCallback, 1000, 'Hello');

// // function myCallback(_a) {
// //     console.log(_a, Date.now());
// // }

// let intervalID;

// function startChange() {
//     if (!intervalID) {
//         // intervalID = setInterval(changeColor, 1000);
//         intervalID = setInterval(changeRandomColor, 1000);
//     }
// }

// // function changeColor() {
// //     // console.log(document.body.style.backgroundColor);
// //     if (document.body.style.backgroundColor !== 'black') {
// //         document.body.style.backgroundColor = 'black';
// //         document.body.style.color = 'white';
// //     } else {
// //         document.body.style.backgroundColor = 'white';
// //         document.body.style.color = 'black';
// //     }
// // }

// function changeRandomColor(){
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = `#${randomColor}`;
//     document.body.style.color = `#${(randomColor2)}`;
// }

// function stopChange() {
//     clearInterval(intervalID);
// }

// document.getElementById('start').addEventListener('click', startChange);

// document.getElementById('stop').addEventListener('click', stopChange);


// -----------------------------------------------Lesson 113
// // CALLBACKS

// // function toggle(e) {
// //     e.target.classList.toggle('danger');
// // }
// // document.querySelector('button').addEventListener('click', toggle);

// const posts = [
//     { title: 'Post One', body: 'This is post one'},
//     { title: 'Post Two', body: 'This is post two'}
// ];

// function createPost(post, cb) {
//     setTimeout(() => {
//         posts.push(post);
//         cb();
//     }, 2000);
// }

// function getPost() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         });
//     }, 1000);
// }


// createPost({ title: 'Post Three', body: 'This is post three' }, getPost);
// // getPost();

// -----------------------------------------------Lesson 116

// // AJAX & XHR Object
// const xhr = new XMLHttpRequest();

// // xhr.open('GET', './movies.json');
// xhr.open('GET', 'https://api.github.com/users/Evgenii-Moskalev/repos');



//   // readyState has 5 possible values
// // - 0: request not initialized
// // - 1: server connection established
// // - 2: request received
// // - 3: processing request
// // - 4: request finished and response is ready
// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         // console.log(JSON.parse(this.responseText));
//         const data = JSON.parse(this.responseText);

//         data.forEach(repo => {
//             const li = document.createElement('li');
//             li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//             document.querySelector('#results').appendChild(li);
//         });
//     }
// }

// xhr.send();

// -----------------------------------------------Lesson 117
// Chuck Norris Joke-Generator

// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// function generateJoke() {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//             if (this.status === 200) {
//                 // console.log(JSON.parse(this.responseText));
//                 jokeEl.innerHTML = JSON.parse(this.responseText).value;
//             } else {
//                 jokeEl.innerHTML = 'Something Went Wrong';
//             }
//         }
//     }

//     xhr.send();
// }

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);

// -----------------------------------------------Lesson 118
// Callback Hell

// function getData(endpoint, cb) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//             if (this.status === 200) {
//                 // console.log(JSON.parse(this.responseText));
//                 cb(JSON.parse(this.responseText));
//             } else {
//                 console.error('Error');
//             }
//         }
//     }

//     setTimeout(() => {
//         xhr.send()
//     }, Math.floor(Math.random() * 3000) + 1000);
// }

// // // Random
// // getData('./movies.json');
// // getData('./actors.json');
// // getData('./directors.json');

// // Not Random Order
// getData('./movies.json', (data) => {
//     console.log(data);
//     getData('./actors.json', (data) => {
//         console.log(data);
//         getData('./directors.json', (data) => {
//             console.log(data);
//         })
//     });
// });

// // -----------------------------------------------Lesson 119
// // PROMISES

// // Create a promise
// const promise = new Promise((resolve, reject) => {
//     // Do some async task
//     setTimeout(() => {
//         console.log('Async task complete');
//         resolve();
//     }, 1000);
// });

// // promise.then(() => {
// //     console.log('Promise consumed');
// // });

// const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;

//         if (!error) {
//             resolve({ name: 'John', secondName: 'Doe' });
//         } else {
//             reject('Error: Something Went Wrong');
//         }
//     }, 1000);
// });
// getUser.then((user) => console.log(user))
//     .catch((error) => console.log(error))
//     .finally(()=>console.log('The promise has been resolved or rejected'));

// console.log('Hello from global scope');


// -----------------------------------------------Lesson 120
// CALLBACK TO PROMISE REFACTOR (from Lesson 115)

// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' }
// ];

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;

//             if (!error) {
//                 posts.push(post);
//                 resolve();
//             } else {
//                 reject('Something went wrong');
//             }
//         }, 2000);
//     });

// }

// function getPost() {
//     setTimeout(() => {
//         posts.forEach(function (post) {
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         });
//     }, 1000);
// }

// function showError(error) {
//     const h3 = document.createElement('h3');
//     h3.innerHTML = `<strong>${error}</strong>`;
//     document.getElementById('msg').appendChild(h3);
// }

// createPost({ title: 'Post Three', body: 'This is post three' })
//     .then(getPost)
//     .catch(showError);


// -----------------------------------------------Lesson 121
// Promise chaining
// const getUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;

//         if (!error) {
//             resolve({ name: 'John', age: 30 });
//         } else {
//             reject('Error: Something Went Wrong');
//         }
//     }, 1000);
// });
// getUser.then((user) => {
//     console.log(user);
//     return user.name;
// }).then((name) => {
//     console.log(name);
//     return name.length;
// }).then((nameLength) => {
//     console.log(nameLength);
// }).catch((error) => {
//     console.log(error);
//     return 321;
// })
//     .then((xNum) => console.log('This will run no matter what', xNum));

// -----------------------------------------------Lesson 122
// Promises vs Callback Hell(lesson118)

// function getData(endpoint) {

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', endpoint);

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText));
//                 } else {
//                     reject('Something went wrong');
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000);
//     });

// }

// getData('./movies.json')
//     .then((movies) => {
//         console.log(movies);
//         return getData('./actors.json');
//     })
//     .then((actors) => {
//         console.log(actors);
//         return getData('./directors.json');
//     }).then((directors) => {
//         console.log(directors);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// -----------------------------------------------Lesson 123
// Promises.all()

// function getData(endpoint) {

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', endpoint);

//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4) {
//                 if (this.status === 200) {
//                     resolve(JSON.parse(this.responseText));
//                 } else {
//                     reject('Something went wrong');
//                 }
//             }
//         }

//         setTimeout(() => {
//             xhr.send()
//         }, Math.floor(Math.random() * 3000) + 1000);
//     });

// }

// const moviesPromise = getData('./movies.json');
// const actorsPromise = getData('./actors.json');
// const directorsPromise = getData('./directors.json');

// const dummyPromise = new Promise((resolve, reject) => {
//     resolve('Hello World');
// });

// Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => console.log(err));

// -----------------------------------------------Lesson 125
// Fetch API & Async Await

// Fetching a json file

// window.fetch('./movies.json')
//     .then(response => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     });

// // Little cleaner way
// window.fetch('./movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// // Fetching a text file
// window.fetch('test.txt')
//     .then((response) => response.text())
//     .then((data) => console.log(data));

// // Fetching from an API
// window.fetch('https://api.github.com/users/evgenii-moskalev')
//     .then((response) => response.json())
//     .then((data) => (document.querySelector('h1').textContent = data.login));


// -----------------------------------------------Lesson 127
// // Fetch Options - Method, Body, Headers
// function createPost({ title, body }) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             body
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//             token: 'abc123'
//         }
//     })
//         .then(res => res.json())
//         .then(data => console.log(data));
// }

// createPost({ title: 'My Post', body: 'This Is My Post' });

// -----------------------------------------------Lesson 130
// Fetch API Error Handling using https://httpstat.us/

// fetch('http://httpstat.us/200')
//     .then((res) => {return res})
//     .then(() => console.log('success'));


// // Test with response.ok
// fetch('http://httpstat.us/404')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error('Request Failed');
//         }
//         return response
//     })
//     .then(() => console.log('success'))
//     .catch((err)=>console.log(err));

// // Check for specific code
// fetch('http://httpstat.us/200')
//     .then((response) => {
//         console.log(response);
//         if (response.status === 404) {
//             throw new Error('Not Found');
//         } else if(response.status === 500){
//             throw new Error('Server Error');
//         } else if(response.status !==200){
//             throw new Error('Request Failed');
//         }

//         return response;
//     })
//     .then(() => console.log('success'))
//     .catch((err) => console.log(err));


// // Catch runs on network error
// fetch('http://hello123.net')
//     .then((res) => { return res })
//     .then(() => console.log('success'))
//     .catch((err) => console.log(err));

// -----------------------------------------------Lesson 131
// Async & Await

// const basicPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: 'John', age: 20});
//     }, 1000);
// });

// .then() way
// basicPromise.then(data => console.log(data));

// Async-Await way
// async function getPromise () {
//     const response = await basicPromise;
//     console.log(response);
// }

// // getPromise();
// const mainUrl = 'https://jsonplaceholder.typicode.com/users';

// // // Another example with .then() to compare
// // function getUsers2() {
// //     fetch(`${mainUrl}?_limit=2`)
// //         .then(res => res.json())
// //         .then(data => console.log(data));
// // }

// // Using Async & Await
// async function getUsers() {
//     const response = await fetch(`${mainUrl}?_limit=5`);
//     const data = await response.json();

//     console.log(data);
// }

// //  Using Async & Await using ARROW FUNCTION(async()=>) way
// const getPosts7 = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7');
//     const data = await response.json();

//     console.log(data);
// }

// // getUsers2();
// getUsers();
// getPosts7();

// -----------------------------------------------Lesson 132
// Try...Catch Statements
// try {
//     console.log(x);
// } catch (err) {
//     console.log('Error: ' + err);
// }

// function double(number) {
//     if (isNaN(number)) {
//         throw new Error(number + ' is not a number');
//     }
//     return number * 2;
// }

// try {
//     const res = double('f');
//     console.log(res);
// } catch (err) {
//     console.log(err);
// }


// -----------------------------------------------Lesson 133
// // Async & Await + Try...Catch error handling

// const getUsers = async () => {
//     try {
//         // const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
//         const response = await fetch('https://httpstat.us/404');

//         if (!response.ok) {
//             // console.log(response);
//             throw new Error('Request Failed');
//         }

//         const data = await response.text();
//         console.log(data);


//     } catch (err) {
//         console.log(err);
//     }
// }


// getUsers();


// // .catch() on function call
// const getPosts = async () => {

//         // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
//         const response = await fetch('https://httpstat.us/500');

//         if (!response.ok) {
//             // console.log(response);
//             throw new Error('Request Failed');
//         }

//         const data = await response.text();
//         console.log(data);
// }


// getPosts().catch(err => {
//     console.log(err);
// });

// -----------------------------------------------Lesson 134
// Multiple Promises With Async & Await
// from lesson 122
function getData(endpoint) {

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Something went wrong');
                }
            }
        }

        setTimeout(() => {
            xhr.send()
        }, Math.floor(Math.random() * 3000) + 1000);
    });

}

// getData('./movies.json')
//     .then((movies) => {
//         console.log(movies);
//         return getData('./actors.json');
//     })
//     .then((actors) => {
//         console.log(actors);
//         return getData('./directors.json');
//     }).then((directors) => {
//         console.log(directors);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


async function getAllData() {
    const movies = await getData('./movies.json');
    const actors = await getData('./actors.json');
    const directors = await getData('./directors.json');
    console.log(movies, actors, directors);
    console.log(123);
}

async function getAllDataWithFetch() {
    const moviesRes = await fetch('./movies.json');
    const moviesData = await moviesRes.json();

    const actorsRes = await fetch('./actors.json');
    const actorsData = await actorsRes.json();

    const directorsRes = await fetch('./directors.json');
    const directorsData = await directorsRes.json();

    console.log(moviesData, actorsData, directorsData);
}


async function getAllDataPromiseAll() {
    const [moviesRes, actorsRes, directorsRes] = await Promise.all([
        fetch('./movies.json'),
        fetch('./actors.json'),
        fetch('./directors.json')
    ]);

    const movies = await moviesRes.json();
    const actors = await actorsRes.json();
    const directors = await directorsRes.json();

    console.log(movies, actors, directors);
}

async function getAllDataPromiseAll2() {
    const [movies, actors, directors] = await Promise.all([
        fetch('./movies.json').then((res) => res.json()),
        fetch('./actors.json').then((res) => res.json()),
        fetch('./directors.json').then((res) => res.json())
    ]);



    console.log(movies, actors, directors);
}

// getAllData();
console.log(123);
// getAllDataWithFetch();
// getAllDataPromiseAll();
getAllDataPromiseAll2();