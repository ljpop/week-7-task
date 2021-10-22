"use strict";

const BACKED_MAX = 100000;

const MIN_VALUES = {
    noreward: 1,
    bamboo: 25,
    black: 75,
    mahagony: 200
}

const btn_back = document.querySelector(".button-back");
const success_modal = document.querySelector(".success-modal");
const selection_modal = document.querySelector(".selection-modal");
const overlay = document.querySelector(".overlay");
const exit = document.querySelector(".close-img");

const labelTotalBacked = document.querySelector(".amount");
const labelTotalBackers = document.querySelector(".backers");
const labelBambooLeft = document.querySelectorAll(".bambo-left");
const labelBlackLeft = document.querySelectorAll(".black-left");
const labelMahagonyLeft = document.querySelectorAll(".mahagony-left");
const labelWidth = document.querySelector(".progress-width");

const btnBookmark = document.querySelector(".bookmark ");
const btnMobile = document.querySelector(".btn-mobile");
const btnText = document.querySelector(".btnText");
const btn_gotIt = document.querySelector(".btnGotIt");

const btn_menu = document.querySelector(".menu-mob");
const menu_img = document.querySelector(".menu-img");
const exit_menu = document.querySelector(".close-menu");
const overlay_menu = document.querySelector(".overlay-mobile");
const menu_modal = document.querySelector(".menu-modal");
const logo_big = document.querySelector(".logo-big");

const rbs = document.querySelectorAll('input[name="radio"]');


let Left_Values = {
    noreward: Infinity,
    bamboo: 101,
    black: 64,
    mahagony: 0
}


let total_backed = 89914;
let progress_width;
let total_backers = 5007;
let days_left = 56; /*TODO:*/

// let bamboo_left = 101;
// let black_left = 64;
// let mahagony_left = 0;

/*---------------RADIO BUTTONS-----------*/


/*PRVI NACIN - radi*/

// let selectedValue;

// selection_modal.onclick = function() {

//     for (const rb of rbs) {
//         if (rb.checked) {
//             selectedValue = rb.value;
//         }
//     }

//     if (selectedValue) {
//         document.querySelector(`.${selectedValue}`).classList.remove('visibility');
//         document.querySelector(`.${selectedValue}-div`).classList.add('active');
//     }


//     console.log(selectedValue);
// };

/*proba*/
// document.onclick = function() { console.log(selectedValue); }
// let selectedValue2 = document.querySelector('input[name="radio"]:checked').value;
// document.onclick = function() { console.log(selectedValue2); }


/*DRUGI NACIN - radi*/
let selectedValue;
let amount_tmp;
let active_btn;
let tmp_min;



const preventRefresh = function(event) {
    event.preventDefault();
}

selection_modal.onclick = function() {

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            if (!document.querySelector(`.${rb.value}-div`).classList.contains('out-of-stock')) {
                document.querySelector(`.${selectedValue}`).classList.remove('visibility');
                document.querySelector(`.${selectedValue}-div`).classList.add('active');
                document.querySelector(`.${selectedValue}-btn`).classList.add('active-btn');

                active_btn = document.querySelector('.active-btn');
                active_btn.onclick = function(event) {
                    event.preventDefault();
                    amount_tmp = Number(document.querySelector(`.input-${selectedValue}`).value);


                    if (amount_tmp >= MIN_VALUES[selectedValue] && Left_Values[selectedValue] >= 1) {

                        Left_Values[selectedValue] = Left_Values[selectedValue] - 1;
                        total_backed = total_backed + amount_tmp;
                        total_backers = total_backers + 1;
                        progress_width = (100 * Math.min(total_backed, BACKED_MAX)) / BACKED_MAX;

                        document.querySelector(`.input-${selectedValue}`).value = '';
                        updateUI();

                        closeSelectionModal();
                        openSuccessModal();

                        btnBookmark.classList.add("bookmarked");
                        btnText.textContent = "Bookmarked";
                        btnMobile.classList.add("bookmarked-mob");

                    } else alert('WRONG INPUT');

                }
            }
        } else {
            document.querySelector(`.${rb.value}`).classList.add('visibility');
            document.querySelector(`.${rb.value}-div`).classList.remove('active');
            document.querySelector(`.${rb.value}-btn`).classList.remove('active-btn');
        }
    }
};

/*---*/
const removeActive = function(selectedValue) {
    if (selectedValue) {
        document.querySelector(`.${selectedValue}`).classList.add('visibility');
        document.querySelector(`.${selectedValue}-div`).classList.remove('active');
        document.querySelector(`.${selectedValue}-btn`).classList.remove('active-btn');

        //  document.querySelector(`.${selectedValue}-check`).classList.add('unchecked');
        // console.log(document.querySelector(`.${selectedValue}-check`), document.querySelector('.unchecked'));


    }

};


/*---------------MODALS-----------*/
const openSelectionModal = function() {
    selection_modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

/*TODO:*/
const openSuccessModal = function() {
    success_modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeSelectionModal = function() {
    selection_modal.classList.add("hidden");
    overlay.classList.add("hidden");

    removeActive(selectedValue);


};

const closeSuccessModal = function() {
    success_modal.classList.add("hidden");
    overlay.classList.add("hidden");
    btnBookmark.classList.add("bookmarked");
    btnText.textContent = "Bookmarked";
    removeActive(selectedValue);
};

const openMenu = function() {
    menu_modal.classList.remove("hidden");
    overlay_menu.classList.remove("hidden");
    menu_img.classList.add("hidden");
    logo_big.classList.add("unvisible");
};

const closeMenu = function() {
    menu_modal.classList.add("hidden");
    overlay_menu.classList.add("hidden");
    menu_img.classList.remove("hidden");
    logo_big.classList.remove("unvisible");
};

btn_back.addEventListener("click", openSelectionModal);
exit.addEventListener("click", closeSelectionModal);
overlay.addEventListener("click", closeSelectionModal);
document.addEventListener("keydown", function(e) {
    if (e.code === "Escape") {
        if (!selection_modal.classList.contains("hidden")) closeSelectionModal();
    }
});

btn_gotIt.addEventListener("click", closeSuccessModal);
overlay.addEventListener("click", closeSuccessModal);
document.addEventListener("keydown", function(e) {
    if (e.code === "Escape") {
        if (!success_modal.classList.contains("hidden")) closeSuccessModal();
    }
});

btn_menu.addEventListener("click", openMenu);
exit_menu.addEventListener("click", closeMenu);
overlay_menu.addEventListener("click", closeMenu);
document.addEventListener("keydown", function(e) {
    if (e.code === "Escape") {
        if (!menu_modal.classList.contains("hidden")) closeMenu();
    }
});

/*------------------------------------*/
/*BOOKMARK*/
// btnBookmark.addEventListener("click", function() {
//     btnBookmark.classList.toggle("bookmarked");
//     if (btnBookmark.classList.contains("bookmarked"))
//         btnText.textContent = "Bookmarked";
//     else btnText.textContent = "Bookmark";
// });

// btnMobile.addEventListener("click", function() {
//     btnMobile.classList.toggle("bookmarked-mob");
// });

const bookmarking = function() {
    btnBookmark.classList.toggle("bookmarked");
    if (btnBookmark.classList.contains("bookmarked"))
        btnText.textContent = "Bookmarked";
    else btnText.textContent = "Bookmark";
    btnMobile.classList.toggle("bookmarked-mob");
}

btnBookmark.addEventListener("click", function() { bookmarking() })
btnMobile.addEventListener("click", function() { bookmarking() })


/*------------------------------------*/
/*UPDATE HTML*/
const updateUI = function() {
        labelWidth.style.width = `${progress_width}%`;

        let formatterCurrency = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        });

        let formatterNumber = new Intl.NumberFormat("en-US", {
            style: "decimal",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        });

        labelTotalBacked.textContent = formatterCurrency.format(total_backed);
        labelTotalBackers.textContent = formatterNumber.format(total_backers);


        // labelBambooLeft.forEach(function(item) {
        //     item.textContent = bamboo_left;
        // });
        // labelBlackLeft.forEach(function(item) {
        //     item.textContent = black_left;
        // });
        // labelMahagonyLeft.forEach(function(item) {
        //     item.textContent = mahagony_left;
        // });



        labelBambooLeft.forEach(function(item) {
            item.textContent = Left_Values['bamboo'];
        });
        labelBlackLeft.forEach(function(item) {
            item.textContent = Left_Values['black'];
        });
        labelMahagonyLeft.forEach(function(item) {
            item.textContent = Left_Values['mahagony'];
        });


    }
    /*------------------------------------*/