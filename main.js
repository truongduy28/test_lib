//    sticky nav menu top
const navMenu = document.querySelector('#header');
let navMenuTop = navMenu.offsetTop;
window.onscroll = function() {
    if (window.scrollY > navMenuTop) {
        navMenu.classList.add('sticky');
    } else {
        navMenu.classList.remove('sticky');
    }
}
const navMenuMobile = document.querySelector('.nav-icon-mobile');
navMenuMobile.addEventListener('click', function() {
    document.querySelector('.mobile_show').classList.toggle('show-menu');
})
const closeMenuMobile = document.querySelector('.menu_close');
closeMenuMobile.addEventListener('click', function() {
    document.querySelector('.mobile_show').classList.toggle('show-menu');
})

// ==> get data
// + definition api links
const urlDocument = 'https://localhost:44309/api/dausach/getall';
const urlLoadDocumentName = 'https://localhost:44309/api/dausach?tensach=';
const urlLoadDocumentTopic = '';
const urlLoadDocumentWriter = '';
const urlLoadDocumentSpecialized = '';
const urlLoadDocumentTags = '';

// definition variables in form search handle 
const searchInput = document.querySelector('#search-input');
const typeInput = document.querySelector('#type-filter');
const submitBtn = document.querySelector('#submit-btn');

// definition storage space loaded data 
const showDocument = document.querySelector('#load-documents');
const messageOut = document.querySelector('#message-output');

// load all data when begin to page 
window.onload = function() {
    const searchInputVal = searchInput.value.trim();
    fetchData(urlLoadDocumentName, searchInputVal);
};

// handle form search 
// + when keyup to search input

searchInput.addEventListener('keyup', function() {
    const searchInputVal = searchInput.value.trim();
    const typeInputVal = typeInput.value;
    if (typeInputVal == 1) {
        fetchData(urlLoadDocumentName, searchInputVal);
    } else if (typeInputVal == 2) {
        fetchData(urlLoadDocumentTopic, searchInputVal)
    } else if (typeInputVal == 3) {
        fetchData(urlLoadDocumentWriter, searchInputVal)
    } else if (typeInputVal == 4) {
        fetchData(urlLoadDocumentSpecialized, searchInputVal)
    } else if (typeInputVal == 5) {
        fetchData(urlLoadDocumentTags, searchInputVal)
    }
});
// when select filter 
typeInput.addEventListener('change', function() {
    const searchInputVal = searchInput.value.trim();
    const typeInputVal = typeInput.value;
    if (typeInputVal == 1) {
        fetchData(urlLoadDocumentName, searchInputVal);
    } else if (typeInputVal == 2) {
        fetchData(urlLoadDocumentTopic, searchInputVal)
    } else if (typeInputVal == 3) {
        fetchData(urlLoadDocumentWriter, searchInputVal)
    } else if (typeInputVal == 4) {
        fetchData(urlLoadDocumentSpecialized, searchInputVal)
    } else if (typeInputVal == 5) {
        fetchData(urlLoadDocumentTags, searchInputVal)
    }
});
// when click submit button
submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const searchInputVal = searchInput.value.trim();
    const typeInputVal = typeInput.value;
    if (typeInputVal == 1) {
        fetchData(urlLoadDocumentName, searchInputVal);
    } else if (typeInputVal == 2) {
        fetchData(urlLoadDocumentTopic, searchInputVal)
    } else if (typeInputVal == 3) {
        fetchData(urlLoadDocumentWriter, searchInputVal)
    } else if (typeInputVal == 4) {
        fetchData(urlLoadDocumentSpecialized, searchInputVal)
    } else if (typeInputVal == 5) {
        fetchData(urlLoadDocumentTags, searchInputVal)
    }
});

function fetchData(url, search) {
    fetch(url + search)
        .then(response => response.json())
        .then(data => {
            console.log(``, data);
            let html = '';
            data.forEach(documents => {
                html += `
                <div class="document">
                `;
                if (documents.soluongCoTheMuon <= 0) {
                    html += `
                    <div class="status-label status-false">
                        T???m h???t
                    </div>
                    `;
                } else {
                    html += `
                    <div class="status-label status-true">
                        C?? th??? m?????n
                    </div>
                    `;
                }
                html += `
                    <div class="img-document">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GJvMDy_RMJrh417RacAdIu4eCxvKNHzjJw&usqp=CAU" alt="">
                        </div>
                        <a href="">${documents.dauSach.tenDauSach}, ${documents.dauSach.soTrang} trang</a>
                        <p>Th??? lo???i: ${documents.dauSach.chuDe}</p>
                        <p>T??c gi???: ${documents.dauSach.tacGia} xu???t b???n n??m ${documents.dauSach.namXB}</p>
                        <br>
                        <a href="">K???: ${documents.dauSach.keSach}</a>
                    </div>
                `;
            })

            showDocument.innerHTML = html;
            if (search != '') {
                messageOut.innerText = `T??m ???????c ${data.length} k???t qu??? cho t??? kh??a '${search}' `;
            } else {
                messageOut.innerText = `T??m ???????c ${data.length} k???t qu???`;
            }
        })
}


// const search = document.querySelector('#search-input');
// urlSearch = 'https://localhost:44309/api/dausach';
// search.addEventListener('keyup', function(event) {
//     search.value;
//     if (search.value == undefined || search.value == '') {
//         getAllData();
//     } else {
//         console.log(event.target.value);

//         function searchDocument() {
//             fetch(urlSearch + '?tensach=' + search.value)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(``, data);
//                     let html = '';
//                     data.forEach(documents => {
//                         html += `
//             <div class="document">
//                 <div class="img-document">
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GJvMDy_RMJrh417RacAdIu4eCxvKNHzjJw&usqp=CAU" alt="">
//                 </div>
//                 <a href="">${documents.tenDauSach}</a>
//                 <p>Th??? lo???i: ${documents.chuDe}</p>
//                 <p>S??? l?????ng: ${documents.sl}</p>
//                 <br>
//                 <a href="">Xem chi ti???t</a>
//             </div>
//         `;
//                     })

//                     loadHire.innerHTML = html;
//                 })
//         }
//         searchDocument();
//     }


// })


// function getAllData() {
//     fetch(urlDocument)
//         .then(response => response.json())
//         .then(data => {
//             console.log(``, data);
//             let html = '';
//             data.forEach(documents => {
//                 html += `
//                     <div class="document">
//                         <div class="img-document">
//                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GJvMDy_RMJrh417RacAdIu4eCxvKNHzjJw&usqp=CAU" alt="">
//                         </div>
//                         <a href="">${documents.tenDauSach}</a>
//                         <p>Th??? lo???i:  ${documents.chuDe}</p>
//                         <p>S??? l?????ng: ${documents.sl}</p>
//                         <br>
//                         <a href="">Xem chi ti???t</a>
//                     </div>
//                 `;
//             })

//             loadHire.innerHTML = html;
//         })
// }
// getAllData();