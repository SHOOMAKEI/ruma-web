/**
 * Whenever the page loads add these classes to the div with the id _next
 * because it will be the root div, the only child of the body, these classes will make
 * the pages take the full height of the screen even with no content instead of hanging
 * half screen with fewer content */
document.querySelector("#app").className =
    "page d-flex flex-row flex-column-fluid";
