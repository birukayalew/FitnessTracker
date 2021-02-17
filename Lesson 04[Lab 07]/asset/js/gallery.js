// gallery

const postDiv3 = document.querySelector('.img-slider');
const postDiv1 = document.querySelector('.navigation');
let arr = new Array();


document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    load_fromPlaceHolder();
});
function load_fromPlaceHolder() {

    //open the request 
    fetch('https://picsum.photos/v2/list?page=2&limit=10')
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
       
        .then(function(posts) {
            //iterate over each post [100 posts]
        
            // console.log(posts);
            arr = posts;
            // console.log(arr);
            posts.forEach(function(post) {
                postDiv1.innerHTML += `<div class="btn"></div>`
            });
            posts.forEach(function(post) {
                postDiv3.innerHTML += `
        
                    <div class="slide">
                        <img src="${post.download_url}" alt="" class="images">
                    </div>
                `;
            });
            var slides = document.querySelectorAll('.slide');
            var btns = document.querySelectorAll('.btn');
            let currSlide = 1;
            slides[0].classList.add('active');
            btns[0].classList.add('active');
            var manualNav = function(manual){
            slides.forEach((slide) => {
            slide.classList.remove('active');
            btns.forEach((btn) => {
                btn.classList.remove('active');
            })

        });
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }
    btns.forEach((btn,i) => {
        btn.addEventListener('click', () => {
            manualNav(i);
            currSlide = i;
        })
    });
            

            

            
            // postDiv3.innerHTML = output;
            // postDiv1.innerHTML = output1;
        })
        // .catch(function(err) {
        //     console.log(err);
        // });



}

