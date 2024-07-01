function is404Page(){
    const notFoundText = ["404", "not found"];
    const bodyText = document.body.innerText.toLocaleLowerCase();

    return notFoundText.some(text => bodyText.includes(text));
}

function askRedirectConfirmation() {
    return confirm("This page seems to be unavailable (404). Do you want to view it on the Internet Archive?");
}

if(is404Page()){

    if(askRedirectConfirmation()){
        const currentUrl = window.location.href;
        const archiveUrl = `https://web.archive.org/web/*/${currentUrl}`;
        window.location.href = archiveUrl;
    }
}