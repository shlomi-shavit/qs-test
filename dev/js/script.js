"use strict";

$(document).ready(function () {

    /*-- Variables & Functions --*/
    var request = new XMLHttpRequest(),
        sliderMainImage = document.getElementsByClassName("slider-main-image"),
        thumbnailWrapper = document.getElementsByClassName("thumbnail-container"),
        sliderTitle = document.getElementsByClassName("slider-title"),
        slideContent = document.getElementsByClassName("slider-content"),
        nextBtn = document.getElementsByClassName("next-btn"),
        prevBtn = document.getElementsByClassName("prev-btn");

    var imageListWrapper = document.createElement("ul"),
        currentListItem = document.getElementsByTagName("li"),
        currentIndex = 0;

    // Toggle class function
    function toggleClass(elementName, className, index) {
        for (var x = 0; x < elementName.length; x++) {
            elementName[x].removeAttribute("class");
        }
        elementName[index].classList.add(className);
    }
    /*-- Variables & Functions --*/

    // Images list from json file
    request.open('GET', '/js/someJson.json');
    request.onreadystatechange = function () {

        if (request.status === 200 && request.readyState === 4) {
            (function () {

                // Slider content data function
                var sliderDateSet = function sliderDateSet(index) {
                    sliderMainImage[0].src = sliderDate[index].imageUrl;
                    sliderTitle[0].innerHTML = sliderDate[index].title;
                    slideContent[0].innerHTML = sliderDate[index].content;
                };

                /*-- For loop --*/


                var sliderDate = JSON.parse(request.responseText);
                var _loop = function _loop(i) {
                    var imageListItem = document.createElement("li"),
                        imageListImg = document.createElement("img"),
                        imageListTitle = document.createElement("h2");

                    imageListImg.src = sliderDate[i].imageUrl;
                    imageListTitle.innerHTML = sliderDate[i].title;
                    imageListItem.appendChild(imageListImg);
                    imageListItem.appendChild(imageListTitle);
                    imageListWrapper.appendChild(imageListItem);

                    /*-- Image selction --*/
                    imageListItem.onclick = function () {
                        currentIndex = i;
                        sliderDateSet(i);
                        toggleClass(currentListItem, "active", currentIndex);
                    };

                    /*-- Next & Previos buttons function --*/
                    // Next btn
                    nextBtn[0].onclick = function () {
                        currentIndex++;
                        if (currentIndex == sliderDate.length) {
                            currentIndex = 0;
                        }
                        sliderDateSet(currentIndex);
                        toggleClass(currentListItem, "active", currentIndex);
                    };
                    // Prev btn
                    prevBtn[0].onclick = function () {
                        currentIndex--;
                        if (currentIndex == -1) {
                            currentIndex = sliderDate.length - 1;
                        }
                        sliderDateSet(currentIndex);
                        toggleClass(currentListItem, "active", currentIndex);
                    };
                    /*-- /Image selction function --*/
                };

                for (var i = 0; i <= sliderDate.length - 1; i++) {
                    _loop(i);
                }
                /*-- /For loop --*/

                // Append images list to ul element
                thumbnailWrapper[0].appendChild(imageListWrapper);

                // Defualt slider content
                sliderDateSet(0);
                imageListWrapper.firstChild.classList.add("active");
            })();
        }
    };

    request.send();
});

//# sourceMappingURL=script.js.map