let loggedIn = false;
const tagArr = [];
const loginForm = $(".login_form"),
    signinForm = $(".signin_form"),
    close = $(".popup_contactForm__close"),
    toggleFormsBtn = $(".contact_form__title a.more"),
    popUpOpacity = $(".opacity"),
    filterForm = $(".act_popup__filter"),
    tagContainer = $(".filter_tags"),
    requestBnt = $(".request_product__btn button"),
    requestForm = $(".request_form"),
    contactForm = $(".contact_form"),
    moreInfoPopup = $(".more_info__popup"),
    sendResumeForm = $(".sendresume_form"),
    closeForm = $(".popup_contactForm__close"),
    addInfo = $(".add_info__popup"),
    successPopup = $(".success_popup__wrapper");
const backToTop = function() {
    const pxShow = 800;
    const goTopButton = document.querySelector(".toUp");

    if (!goTopButton) return;

    // Show or hide the button
    if (window.scrollY >= pxShow) goTopButton.classList.add("is-visible");

    window.addEventListener("scroll", function() {
        if (window.scrollY >= pxShow) {
            if (!goTopButton.classList.contains("is-visible"))
                goTopButton.classList.add("is-visible");
        } else {
            goTopButton.classList.remove("is-visible");
        }
    });
};
const showVideo = () => {
    const videoContainer = $(".popUp_video__container"),
        videoOpacity = $(".popUp_video__opacity"),
        close = $(".close_video"),
        showVideoBtn = $(".video_circle");

    close.click((e) => {
        const addedVideo = $(".popUp_video__wrapper");
        e.preventDefault();
        videoOpacity.hide();
        videoContainer.hide();
        addedVideo.remove();
    });
    videoOpacity.click((e) => {
        const addedVideo = $(".popUp_video__wrapper");
        e.preventDefault();
        videoOpacity.hide();
        videoContainer.hide();
        addedVideo.remove();
    });
    showVideoBtn.click((e) => {
        e.preventDefault();
        videoContainer.append(video);
        videoOpacity.show();
        videoContainer.show();
    });
};
const showMenu = function() {
    const closeBtn = document.querySelector(".close_btn");
    const closeSubm = document.querySelector(".close_sumb");
    const contacts = document.querySelector("#submbtn");
    const menu = document.querySelector(".nav_menu");
    const burger = document.querySelector(".nav_burger");
    const subMenu = document.querySelector(".sub-menu");

    const closeMenu = () => {
        console.log(window.innerWidth);
        menu.style.transform = "translateX(100%)";
    };
    const showMenu = () => {
        menu.style.transform = "translateX(0%)";
        closeBtn.style.display = "block";
    };
    const closeAfterResize = () => {
        if (window.innerWidth > 768) {
            menu.style.transform = "translateX(0%)";
            subMenu.style.transform = "translateX(0%)";
            closeBtn.style.display = "none";
            closeSubm.style.display = "none";
        } else {
            menu.style.transform = "translateX(100%)";
            subMenu.style.transform = "translateX(100%)";
        }
    };
    const showSubMenu = (e) => {
        e.preventDefault();
        subMenu.style.transform = "translateX(0%)";
        closeBtn.style.display = "none";
        closeSubm.style.display = "block";
    };
    const hideAllMenus = () => {
        menu.style.transform = "translateX(100%)";
        subMenu.style.transform = "translateX(100%)";
        closeBtn.style.display = "none";
        closeSubm.style.display = "none";
    };
    const activateToggle = () => {
        if (window.screen.width <= 768 || window.innerWidth <= 768) {
            contacts.addEventListener("click", showSubMenu);
            closeSubm.addEventListener("click", hideAllMenus);
        } else {
            contacts.removeEventListener("click", showSubMenu);
            closeSubm.removeEventListener("click", hideAllMenus);
        }
    };
    window.addEventListener("resize", closeAfterResize);
    window.addEventListener("resize", activateToggle);
    window.addEventListener("load", activateToggle);
    closeBtn.addEventListener("click", closeMenu);
    burger.addEventListener("click", showMenu);
};

activeFilter = function() {
    const showButton = $(".filter_btn");
    const closeButton = $(".act_close");
    const resetForm = $(".reset");
    const resetButton = $(".btn-reset");

    popUpOpacity.click(() => {
        popUpOpacity.hide();
        filterForm.hide();
    });
    resetButton.click(() => {
        tagContainer.children().remove();
    });
    resetForm.click(() => {
        filterForm[0].reset();
        tagArr.splice(0, tagArr.length);
    });
    showButton.click(() => {
        popUpOpacity.show();
        filterForm.show();
    });
    closeButton.click(() => {
        filterForm.hide();
        popUpOpacity.hide();
    });
    const manageTags = (e) => {
        let tag = e.target.nextElementSibling.innerHTML;
        if (e.target.checked) {
            tagArr.push(tag);
        } else {
            let index = tagArr.indexOf(tag);
            tagArr.splice(index, 1);
        }
    };
    const addTags = (e) => {
        e.preventDefault();
        let tagElements = [];

        tagElements = tagArr.map((item) => {
            return `<div class="filter_tag">
                        <div class="filter_tag__name">${item}</div>
                        <span class="closetag">
                            <img src="./src/img/svg/close-tag.svg" alt="close">
                        </span>
                    </div>`;
        });
        if (tagContainer.children().length === 0) {
            tagContainer.append(tagElements);
            const closeTag = $(".closetag");
            closeTag.click(function(e) {
                e.delegateTarget.parentElement.remove();
                const tagName = $(this)
                    .parents(".filter_tag")
                    .find(".filter_tag__name")[0].innerHTML;
                const checkBox = filterForm.find(`:contains('${tagName}')`)[1];
                let index = tagArr.indexOf(tagName);
                tagArr.splice(index, 1);
                $(checkBox).find("input")[0].checked = false;
                console.log($(checkBox).find("input"));
            });
        } else {
            tagContainer.children().remove();
            tagContainer.append(tagElements);
            const closeTag = $(".closetag");
            closeTag.click(function(e) {
                e.delegateTarget.parentElement.remove();
                const tagName = $(this)
                    .parents(".filter_tag")
                    .find(".filter_tag__name")[0].innerHTML;
                const checkBox = filterForm.find(`:contains('${tagName}')`)[1];
                let index = tagArr.indexOf(tagName);
                tagArr.splice(index, 1);
                $(checkBox).find("input")[0].checked = false;
                console.log($(checkBox).find("input"));
            });
        }
        popUpOpacity.hide();
        filterForm.hide();
    };

    filterForm.change((e) => manageTags(e));
    filterForm.submit((e) => addTags(e));
};
const showPrices = () => {
    const choseCity = $(".act_popup__city"),
        showBtn = $(".price_popup"),
        closeBtn = $(".popup_city__close");
    showBtn.click(() => {
        popUpOpacity.show();
        choseCity.show();
        const city = $(".popup_city"),
            contacts = $(".popup_city__contacts"),
            closeAll = $(".popup_contats__close");
        city.click((e) => {
            const cityContainer = $(".contacts_city"),
                changeCity = $(".changeCity"),
                contactUs = $(".consultForm_btn button"),
                contactForm = $(".contact_form"),
                counter = $(".counter"),
                textarea = $(".inputGroup textarea");
            choseCity.hide();
            contacts.show();
            cityContainer.append(e.target.innerHTML);
            textarea.on("input", function(e) {
                counter.text(
                    `${e.target.value.length}/${$(this)[0].attributes.maxLength.value}`
                );
            });
            contactUs.click(function() {
                contactForm.show();
                contacts.hide();
                cityContainer.empty();
                city.off("click");
            });
            $(".popup_contactForm__close").click(() => {
                popUpOpacity.hide();
                contactForm.hide();
                contactForm[0].reset();
            });
            changeCity.click(() => {
                choseCity.show();
                contacts.hide();
                cityContainer.empty();
            });

            closeAll.click(() => {
                popUpOpacity.hide();
                contacts.hide();
                cityContainer.empty();
                city.off("click");
            });
            popUpOpacity.click(() => {
                popUpOpacity.hide();
                contacts.hide();
                contactForm[0].reset();
                contactForm.hide();
                cityContainer.empty();
                city.off("click");
            });
        });
        closeBtn.click(() => {
            popUpOpacity.hide();
            choseCity.hide();
            city.off("click");
        });
        popUpOpacity.click(() => {
            popUpOpacity.hide();
            choseCity.hide();
            city.off("click");
        });
    });
};

function manageInput() {
    $(".inputGroup input").focusin(function() {
        $(this).next("label").addClass("active");
    });
    $(".inputGroup input").focusout(function() {
        if ($(this).val()) {
            return;
        } else {
            $(this).next("label").removeClass("active");
        }
    });
}
const showAddInfo = () => {
    const addInfoBtn = $(".add_i a");
    addInfoBtn.click((e) => {
        e.preventDefault();
        popUpOpacity.show();
        addInfo.show();
    });
};
const manageCategoryPopup = () => {
    const catBtnToggle = $(".filter_cat .btn_primary"),
        closeCat = $(".cat_close"),
        actIngridients = $(".act_ingridients");
    catBtnToggle.click(function() {
        actIngridients.show();
    });
    closeCat.click(() => {
        actIngridients.hide();
    });
    const manageCategory = () => {
        if (window.innerWidth > 768) {
            actIngridients.show();
        } else {
            actIngridients.hide();
        }
    };
    window.addEventListener("resize", manageCategory);
};

const showSearch = () => {
    const searchPopup = $(".popUp_search");
    const body = $("body");
    const searchBtnSm = $(".nav_search__btn");
    const searchText = $(".nav_search__text");
    const closeText = $(".nav_search__close");

    searchText.click(function() {
        searchText.hide();
        closeText.show();
        searchPopup.show();
        body.toggleClass("fixed");
        console.log(body[0].style);
        body.scroll(() => {
            console.log("hello");
            body[0].style.top = `-${window.scrollY}px`;
        });
    });
    closeText.click(function() {
        searchText.show();
        closeText.hide();
        searchPopup.hide();
        body.toggleClass("fixed");
    });
    searchBtnSm.click(function() {
        searchText.toggle();
        closeText.toggle();
        searchPopup.toggle();
        body.toggleClass("fixed");
    });
};
const contactUs = () => {
    const contactUs = $(".consultForm_btn button"),
        contactForm = $(".contact_form"),
        closeFrom = $(".popup_contactForm__close");
    contactUs.click(() => {
        contactForm.show();
        popUpOpacity.show();
    });
    popUpOpacity.click(() => {
        contactForm.hide();
        popUpOpacity.hide();
    });
    closeFrom.click(() => {
        contactForm.hide();
        popUpOpacity.hide();
    });
};
const requestItem = () => {
    productNameContainer = $(".contact_form__productname h3");
    requestBnt.click(function() {
        if (!loggedIn) {
            loginForm.show();
            popUpOpacity.show();
            console.log(loginForm);
            loginForm.submit((e) => {
                e.preventDefault();
                loggedIn = true;
                loginForm.hide();
                const productTitle = $(this)
                    .parents(".product_name")
                    .find(".product__title h2");
                requestForm.show();
                popUpOpacity.show();
                productNameContainer.text(productTitle.text());
                requestForm.submit((e) => {
                    e.preventDefault();
                    const successTitleContainer = $(".success_productname h3");
                    requestForm.hide();
                    successPopup.show();
                    successTitleContainer.text(productTitle.text());
                });
            });
            signinForm.submit((e) => {
                e.preventDefault();
                loggedIn = true;
                signinForm.hide();
                const productTitle = $(this)
                    .parents(".product_name")
                    .find(".product__title h2");
                requestForm.show();
                popUpOpacity.show();
                productNameContainer.text(productTitle.text());
                requestForm.submit((e) => {
                    e.preventDefault();
                    const successTitleContainer = $(".success_productname h3");
                    requestForm.hide();
                    successPopup.show();
                    successTitleContainer.text(productTitle.text());
                });
            });
        } else {
            const productTitle = $(this)
                .parents(".product_name")
                .find(".product__title h2");
            requestForm.show();
            popUpOpacity.show();
            productNameContainer.text(productTitle.text());
            requestForm.submit((e) => {
                e.preventDefault();
                const successTitleContainer = $(".success_productname h3");
                requestForm.hide();
                successPopup.show();
                successTitleContainer.text(productTitle.text());
            });
        }
    });

    closeForm.click(() => {
        requestForm.hide();
        popUpOpacity.hide();
        productNameContainer.empty();
    });
    popUpOpacity.click(() => {
        requestForm.hide();
        productNameContainer.empty();
    });
};
const closeDialog = () => {
    popUpOpacity.click(() => {
        contactForm.hide();
        loginForm.hide();
        signinForm.hide();
        popUpOpacity.hide();
        filterForm.hide();
        requestForm.hide();
        successPopup.hide();
        sendResumeForm.hide();
        addInfo.hide();
    });
    close.click(() => {
        contactForm.hide();
        loginForm.hide();
        signinForm.hide();
        popUpOpacity.hide();
        filterForm.hide();
        requestForm.hide();
        successPopup.hide();
        sendResumeForm.hide();
        addInfo.hide();
    });
};
const loginForms = () => {
    toggleFormsBtn.click(function(e) {
        e.preventDefault();
        loginForm.toggle();
        signinForm.toggle();
    });
};
const contactShow = () => {
    const contactBtn = $(".contact_btn button"),
        dirTags = $(".directions_tags"),
        dirTag = $(".direction_tag"),
        choseDir = $(".choose_directions button");

    const manageTags = () => {
        if (window.innerWidth < 480) {
            dirTags.hide();
        } else {
            dirTags.show();
            dirTag.off("click");
        }
    };
    contactBtn.click(() => {
        popUpOpacity.show();
        contactForm.show();
    });
    choseDir.click(() => {
        dirTags.show();
        dirTag.click(() => {
            dirTags.hide();
        });
    });
    window.addEventListener("resize", manageTags);
};
const moreInfo = () => {
    const closeBtn = $(".more_info__popup span"),
        moreInfoBtn = $(".item_comp__text button"),
        titleContainer = $(".more_info__popup .item_title"),
        compContainer = $(".more_info__popup .item_comp .item_comp__text"),
        purposeContainer = $(".more_info__popup .item_purpose .item_purpose__text"),
        linksContainer = $(".more_info__popup .item_links");
    moreInfoBtn.click(function() {
        moreInfoPopup.show();
        popUpOpacity.show();
        const productTitle = $(this)
            .parents(".result_item__col1")
            .find(".item_title");
        const productComp = $(this)
            .parents(".result_item__col1")
            .find(".item_comp__text p");
        const productPurp = $(this)
            .parents(".act_result__item")
            .find(".item_purpose__text");
        const productLinks = $(this)
            .parents(".act_result__item")
            .find(".item_links");
        productTitle.clone().appendTo(titleContainer);
        productComp.clone().appendTo(compContainer);
        productPurp.clone().appendTo(purposeContainer);
        productLinks.clone().appendTo(linksContainer);
        const addInfoBtn = $(".add_i a");
        addInfoBtn.click((e) => {
            e.preventDefault();
            popUpOpacity.show();
            addInfo.show();
            moreInfoPopup.hide();
            titleContainer.empty();
            compContainer.empty();
            purposeContainer.empty();
            linksContainer.empty();
        });
    });
    closeBtn.click(() => {
        moreInfoPopup.hide();
        popUpOpacity.hide();
        titleContainer.empty();
        compContainer.empty();
        purposeContainer.empty();
        linksContainer.empty();
    });
    popUpOpacity.click(() => {
        popUpOpacity.hide();
        moreInfoPopup.hide();
        titleContainer.empty();
        compContainer.empty();
        purposeContainer.empty();
        linksContainer.empty();
    });
};
const showResumeForm = () => {
    const openResumeDialog = $(".post_vacancy__send");
    openResumeDialog.click(() => {
        sendResumeForm.show();
        popUpOpacity.show();
    });
};
const attachFile = () => {
    let documentForUpload = [];
    const dragContainer = $(".drop_container"),
        messageContainer = $(".message"),
        choseResume = $("input.choseFile"),
        resetChose = $(".chose_resume span"),
        trash = `
        <div class="trash">
                        <img src="./src/img/svg/trash.svg" alt="">
                    </div>`,
        types = [
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/pdf",
            "text/plain",
            "application/vnd.oasis.opendocument.text",
        ];
    resetChose.click(() => {
        choseResume.val("");
        documentForUpload = [];
        messageContainer.removeClass("error_message");
        messageContainer.empty();
        dragContainer.empty();
        dragContainer.removeClass("error_drag");
        dragContainer.addClass("drag_and_drop");
        dragContainer.removeClass("onMouse");
        dragContainer.removeClass("dropped");
    });

    choseResume.on("change", (e) => {
        if (documentForUpload.length === 0) {
            e.preventDefault();
            console.log(e.target.files);
            const files = e.target.files;
            messageContainer.empty();
            if (files.length > 1) {
                messageContainer.removeClass("success_message");
                messageContainer.addClass("error_message");
                messageContainer.text("Вы можете вставить только 1 файл");
                return;
            }
            for (let key in files) {
                if (files[key].size) {
                    if (!types.includes(files[key].type)) {
                        messageContainer.removeClass("success_message");
                        messageContainer.addClass("error_message");
                        messageContainer.text("Неверный формат файла, попробуйте снова");
                    } else {
                        documentForUpload.push(files[key]);
                        messageContainer
                            .addClass("success_message")
                            .text(`${files[key].name} добавлен`);
                        console.log(documentForUpload);
                    }
                }
            }
        } else {
            messageContainer.removeClass("success_message");
            messageContainer.addClass("error_message");
            messageContainer.text("Вы уже добавили файл");
        }
    });

    dragContainer.on("dragenter", function(e) {
        e.preventDefault();
        documentForUpload = [];
        messageContainer.removeClass("error_message");
        messageContainer.empty();
        dragContainer.empty();
        dragContainer.removeClass("error_drag");
        dragContainer.addClass("onMouse");
        dragContainer.addClass("drag_and_drop");
        dragContainer.removeClass("dropped");
    });
    dragContainer.on("dragover", function(e) {
        e.preventDefault();
    });
    dragContainer.on("drop", function(e) {
        e.preventDefault();
        if (documentForUpload.length === 0) {
            const file = $(e.originalEvent.dataTransfer.files);
            if (file.length > 1) {
                messageContainer.removeClass("success_message");
                messageContainer.addClass("error_message");
                messageContainer.text("Вы можете вставить только 1 файл");
                dragContainer.addClass("error_drag");
                dragContainer.removeClass("onMouse");
                return;
            }
            for (let key in file) {
                if (file[key].size) {
                    //Отсекаем length and prototype
                    if (!types.includes(file[key].type)) {
                        messageContainer.removeClass("success_message");
                        messageContainer.addClass("error_message");
                        messageContainer.text("Неверный формат файла, попробуйте снова");
                        dragContainer.addClass("error_drag");
                        dragContainer.removeClass("onMouse");
                        return;
                    } else {
                        documentForUpload.push(file[key]);
                        dragContainer.removeClass("drag_and_drop");
                        dragContainer.addClass("dropped");
                        dragContainer.text(file[key].name);
                        $(trash).appendTo(dragContainer);
                        const deleteFile = $(".trash");
                        deleteFile.click(() => {
                            dragContainer.empty();
                            documentForUpload = [];
                            dragContainer.removeClass("onMouse");
                            dragContainer.removeClass("dropped");
                            dragContainer.addClass("drag_and_drop");
                        });
                    }
                }
            }
            // файл готов для загрузки
            // console.log(documentForUpload)
        } else {
            messageContainer.removeClass("success_message");
            messageContainer.addClass("error_message");
            messageContainer.text("Вы уже добавили файл");
        }
    });
    dragContainer.on("dragleave", function(e) {
        e.preventDefault();
        dragContainer.removeClass("onMouse");
    });
    //
};
const restorePass = () => {
    const restoreForm = $(".request_pass"),
        sendedMessage = $(".sended_message");
    restoreForm.submit((e) => {
        e.preventDefault();
        console.log(e);
        let email = e.target[0].value;
        sendedMessage.show();
        sendedMessage.text(
            `Временный пароль отправлен на ${email}, если вы не сможете восстановить доступ к кабинету — перейдите на страницу «Контакты» и свяжитесь с нами`
        );
    });
};
const showPassword = () => {
    const showBtn = $(".visible");
    showBtn.click(function() {
        const passinput = $(this)
            .parents(".inputGroup")
            .find('input[type ="password"]');
        const textinput = $(this)
            .parents(".inputGroup")
            .find('input[type ="text"]');
        $(passinput).attr("type", "text");
        $(textinput).attr("type", "password");
        $(this).toggleClass("visible");
        $(this).toggleClass("unvisible");
    });
};
const slider = () => {
    $(".cosm_cat__slider").slick({
        dots: true,
    });
};

$(document).ready(function() {
    showVideo();
    slider();
    activeFilter();
    showMenu();
    backToTop();
    manageInput();
    showPrices();
    manageCategoryPopup();
    showSearch();
    contactUs();
    requestItem();
    loginForms();
    closeDialog();
    contactShow();
    moreInfo();
    attachFile();
    showResumeForm();
    restorePass();
    showPassword();
    showAddInfo();
});