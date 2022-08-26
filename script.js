const iconNav = document.querySelectorAll(".nav-icon");
const mainNav = document.querySelector(".main-header-nav");
const modelBoxOption = document.querySelector(".model-box-option");
const iconModelOption = document.querySelectorAll(".icon-model-option");
const optionList = document.querySelector(".option-list");
const typeList = document.querySelector(".type-list");
const footerListContainer = document.querySelectorAll(".footer-list-container");

/******** HEADER ********/
const toggleMainNav = (e) => {
  Array.from(iconNav).map((icon) => icon.classList.toggle("nav-icon--active"));
  mainNav.classList.toggle("main-header-nav--active");
};

const handleMainNav = (e) => {
  if (
    mainNav.classList.contains("main-header-nav--active") &&
    e.target.closest(".nav-list__link")
  )
    toggleMainNav();
};

Array.from(iconNav).map((icon) =>
  icon.addEventListener("click", toggleMainNav)
);
mainNav.addEventListener("click", handleMainNav);

/************ MODELS *************/
const handleModelBoxOption = (e) => {
  Array.from(iconModelOption).map((icon) =>
    icon.classList.toggle("icon-model-option--active")
  );
  const listHeight = optionList.style.maxHeight;
  if (optionList.style.maxHeight) optionList.style.maxHeight = null;
  else optionList.style.maxHeight = optionList.scrollHeight + "px";
};

const handleTypeList = (e) => {
  const typeListType = e.target.closest(".type-list__type");
  if (typeListType) {
    [...e.currentTarget.children].map((child) =>
      child.classList.remove("type-list__type--active")
    );
    typeListType.classList.add("type-list__type--active");
  }
};

modelBoxOption.addEventListener("click", handleModelBoxOption);
typeList.addEventListener("click", handleTypeList);

/*************** FOOTER ****************/
const footerListArr = [...footerListContainer];

const handleFooterList = (e) => {
  const headingTrigger = e.target.closest(".footer-list-heading");
  const listTrigger = e.target.closest(".footer-list__item");

  if (headingTrigger || listTrigger) {
    const icon = e.currentTarget.querySelector(".icon");
    const footerList = e.currentTarget.lastElementChild;

    icon.classList.toggle("icon--active");
    if (footerList.style.maxHeight) footerList.style.maxHeight = null;
    else footerList.style.maxHeight = footerList.scrollHeight + "px";
  }
};

footerListArr.forEach((list) =>
  list.addEventListener("click", handleFooterList)
);
