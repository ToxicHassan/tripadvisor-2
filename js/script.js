const $ = document

// Nav Bar

const navBtns = $.querySelectorAll('.nav-btn')

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        //Codes
    })
})

// Nav Menu

const hamburgerBtn = $.querySelector('.hamburger-btn')
const navMenu = $.querySelector('.menu')
const navCloseMenuBtn = $.querySelector('.close-btn')


hamburgerBtn.addEventListener('click', () => {
    navMenu.style.right = '0'
})
navCloseMenuBtn.addEventListener('click', () => {
    navMenu.style.right = '-29rem'
})

// Search Bar
const categoriesBtnWrapper = $.querySelectorAll('.categories-btn-wrapper')
const searchInput = $.querySelector('#search-input')
const searchBox = $.querySelector('.search-box')
const searchBoxBtn5 = $.querySelector('.search-box-btn-5')

let btn5IsClicked

let searchInputPlaceholder = [
    {id: 'categories-btn-1', placeHolder: 'مکان هایی برای رفتن، کارهایی که می‌توانید انجام دهید، هتل ها...'},
    {id: 'categories-btn-2', placeHolder: 'نام هتل یا مسیر'},
    {id: 'categories-btn-3', placeHolder: 'جاذبه، فعالیت یا مسیر'},
    {id: 'categories-btn-4', placeHolder: 'رستوران یا مسیر'},
    {id: 'categories-btn-6', placeHolder: 'مسیر'},
]

categoriesBtnWrapper.forEach(btn => {
    btn.addEventListener('click', () => {

        searchBox.style.display = 'flex'
        searchBoxBtn5.style.display = 'none'

        let btnElemObj = searchInputPlaceholder.find(btnElem => {
            return btnElem.id == btn.id
        })
        if (btnElemObj) {
            searchInput.setAttribute('placeholder', btnElemObj.placeHolder)
        }
        if (btn.id == 'categories-btn-5') {
            searchBoxBtn5.style.display = 'flex'
            searchBox.style.display = 'none'
        }
    })
})