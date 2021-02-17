// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const loader = document.querySelector('.s');
loader.classList.add('active');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});
let arr = new Array()

//load a single customer function 
function load_fromPlaceHolder() {

    //open the request 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            arr = posts;
            posts.forEach(function(post) {
                output += `
        
                <div class="item">
                <div class="image">
                    <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
                </div>
                <div class="content">
                    <a class="header" href="#" id="bTitle">
                    ${post.title.toUpperCase()}
                    </a>
                    <div class="description">
                        <p id="bDesc">
                        ${post.body}
                        </p>
                    </div>
                    <div class="extra">
                        <a class="ui floated basic violet button" href="#">Read Mores</a>
                    </div>
                </div>
            </div>
        
        `;
            });

            
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });



}

async function load_fromPlaceHolder_new() {

    //open the request 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();

    return data;

}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `

        <div class="item collections">
        <div class="image">
            <img src=" https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80">
        </div>
        <div class="content">
            <a class="header" href="#" id="bTitle">
            ${post.title.toUpperCase()}
            </a>
            <div class="description">
                <p id="bDesc">
                ${post.body}
                </p>
            </div>
            <div class="extra">
                <a class="ui floated basic violet button" href="#">Read Mores</a>
            </div>
        </div>
    </div>

`;
            });
            loader.classList.remove('active');
            postDiv3.innerHTML = output;

            const increasing = document.querySelector('#asc')
            const decreasing = document.querySelector('#des')
        
            decreasing.addEventListener('click',descending)
            increasing.addEventListener('click',ascending)
            
            function descending(){
                const search = document.querySelectorAll('.collections');
                for(i=0;i<search.length;i++){
                    for(j=0;j<search.length-1;j++){
                        title1=search[j].children[1].children[0].textContent 
                        title2=search[j+1].children[1].children[0].textContent 
                        if (title1 < title2){
                            let temp = search[j].innerHTML
                            search[j].innerHTML = search[j+1].innerHTML;
                            search[j+1].innerHTML = temp;
                        }
                    }
                }
            }
            function ascending(){
                const search = document.querySelectorAll('.collections');
                for(i=0;i<search.length;i++){
                    for(j=0;j<search.length-1;j++){
                        title1=search[j].children[1].children[0].textContent 
                        title2=search[j+1].children[1].children[0].textContent 
                        if (title1 > title2){
                            let temp = search[j].innerHTML
                            search[j].innerHTML = search[j+1].innerHTML;
                            search[j+1].innerHTML = temp;
                        }
                    }
                }
            }




        })
        .catch(function(err) {
            console.log(err);
        });

}

const filter = document.getElementById('search')
filter.addEventListener('keyup', filterTasks);
function filterTasks(e) {
    const term = e.target.value.toUpperCase();
    const search= document.querySelectorAll('#bTitle');
    // const items=search.getElementsByTagName('li')
    search.forEach(function(item){
        const entry =item.textContent;
        if(entry.toUpperCase().indexOf(term) != -1){
            item.parentElement.parentElement.style.display = 'block';
        } else{
            item.parentElement.parentElement.style.display = 'none';
        }
    })};



    

  