let showEle = document.querySelectorAll(".question .show");
let hideEle = document.querySelectorAll(".question .hide");
let plusIcon = document.querySelectorAll(".plus-icon");
let count = 0;
console.log(plusIcon)

function myFun() {

    for (let i = 0; i < arguments.length; i++) {
        arguments[i].addEventListener('click', (a, b, c, d, e) => {
            // one question section
            if (i === 0) {

                if (count === 0) {
                    hideEle[0].style = "height: auto; padding: 20px; transition: height 4s ease 0s;"
                    plusIcon[0].innerHTML = "x"
                    count = 1

                } else {
                    hideEle[0].style = "height: 0px; padding: 0px;"
                    plusIcon[0].innerHTML = "+"
                    count = 0
                }

            }
            // two question section
            else if (i === 1) {

                if (count === 0) {
                    hideEle[1].style = "height: auto; padding: 20px;"
                    plusIcon[1].innerHTML = "x"
                    count = 1

                } else {
                    hideEle[1].style = "height: 0px; padding: 0px;"
                    plusIcon[1].innerHTML = "+"
                    count = 0
                }
            } else if (i === 2) {

                if (count === 0) {
                    hideEle[2].style = "height: auto; padding: 20px;"
                    plusIcon[2].innerHTML = "x"
                    count = 1

                } else {
                    hideEle[2].style = "height: 0px; padding: 0px;"
                    plusIcon[2].innerHTML = "+"
                    count = 0
                }
            }
            // three question section
            else if (i === 3) {

                if (count === 0) {
                    hideEle[3].style = "height: auto; padding: 20px;"
                    plusIcon[3].innerHTML = "x"
                    count = 1

                } else {
                    hideEle[3].style = "height: 0px; padding: 0px;"
                    plusIcon[3].innerHTML = "+"
                    count = 0
                }
            }
            // four question section
            else if (i === 4) {

                if (count === 0) {
                    hideEle[4].style = "height: auto; padding: 20px;"
                    plusIcon[4].innerHTML = "x"
                    count = 1

                } else {
                    hideEle[4].style = "height: 0px; padding: 0px;"
                    plusIcon[4].innerHTML = "+"
                    count = 0
                }
            }


        })
    }

}

myFun(showEle[0], showEle[1], showEle[2], showEle[3], showEle[4]);