'use strict'


const BACKED_MAX = 100000;

const btn_back = document.querySelector('.button-back');
const success_modal = document.querySelector('.success-modal');
const selection_modal = document.querySelector('.selection-modal');
const overlay = document.querySelector('.overlay');
const exit = document.querySelector('.close-img');

const labelTotalBacked = document.querySelector('.amount');
const labelTotalBackers = document.querySelector('.backers');

const labelBambooLeft = document.querySelectorAll('.bambo-left');
const labelBlackLeft = document.querySelectorAll('.black-left');
const labelMahagonyLeft = document.querySelectorAll('.mahagony-left');
const labelWidth = document.querySelector(".progress-width");

const btnBookmark = document.querySelector('.bookmark ');
const btnMobile = document.querySelector('.btn-mobile')
const btnText = document.querySelector('.btnText');
const btn_gotIt = document.querySelector('.btnGotIt');

const btn_menu = document.querySelector('.menu-mob');
const menu_img = document.querySelector('.menu-img');
const exit_menu = document.querySelector('.close-menu');
const overlay_menu = document.querySelector('.overlay-mobile');

const menu_modal = document.querySelector('.menu-modal')

const logo_big = document.querySelector('.logo-big');


let total_backed = 89914;
let progress_width = 100 * Math.min(total_backed, BACKED_MAX) / BACKED_MAX;
let total_backers = 5007;
let days_left = 56; /*TODO:*/

let bamboo_left = 101;
let black_left = 64;
let mahagony_left = 0;


const openSelectionModal = function() {
    selection_modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeSelectionModal = function() {
    selection_modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const closeSuccessModal = function() {
    success_modal.classList.add('hidden');
    overlay.classList.add('hidden');
    btnBookmark.classList.add('bookmarked');
    btnText.textContent = 'Bookmarked';
}

const openMenu = function() {
    menu_modal.classList.remove('hidden');
    overlay_menu.classList.remove('hidden');
    menu_img.classList.add('hidden');
    logo_big.classList.add('unvisible');
}

const closeMenu = function() {
    menu_modal.classList.add('hidden');
    overlay_menu.classList.add('hidden');
    menu_img.classList.remove('hidden');

    logo_big.classList.remove('unvisible');
}

/*TODO:*/
const openSuccessModal = function() {
    success_modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

btn_back.addEventListener('click', openSelectionModal);
exit.addEventListener('click', closeSelectionModal);
overlay.addEventListener('click', closeSelectionModal);
document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape') {
        if (!selection_modal.classList.contains('hidden')) closeSelectionModal();
    }
});

btn_gotIt.addEventListener('click', closeSuccessModal);
overlay.addEventListener('click', closeSuccessModal);
document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape') {
        if (!selection_modal.classList.contains('hidden')) closeSuccessModal();
    }
});

btn_menu.addEventListener('click', openMenu);
exit_menu.addEventListener('click', closeMenu);
overlay_menu.addEventListener('click', closeMenu);
document.addEventListener('keydown', function(e) {
    if (e.code === 'Escape') {
        if (!menu_modal.classList.contains('hidden')) closeMenu();
    }
});



/*------------------------------------*/
/*BOOKMARK*/
btnBookmark.addEventListener('click', function() {
    btnBookmark.classList.toggle('bookmarked');
    if (btnBookmark.classList.contains('bookmarked'))
        btnText.textContent = 'Bookmarked';
    else btnText.textContent = 'Bookmark';
});

btnMobile.addEventListener('click', function() {
    btnMobile.classList.toggle('bookmarked-mob');
});

/*------------------------------------*/
/*UPDATE HTML*/
labelWidth.style.width = `${progress_width}%`;

let formatterCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
});

let formatterNumber = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
});

labelTotalBacked.textContent = formatterCurrency.format(total_backed);
labelTotalBackers.textContent = formatterNumber.format(total_backers);
labelBambooLeft.forEach(function(item) { item.textContent = bamboo_left });
labelBlackLeft.forEach(function(item) { item.textContent = black_left });
labelMahagonyLeft.forEach(function(item) { item.textContent = mahagony_left });
/*------------------------------------*/