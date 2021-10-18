console.log(breadcrumbFunction("https://www.btplc.com/Sites/adastral.HTML", " / "));
console.log(breadcrumbFunction("https://www.btplc.com/Sites/adastral.HTML", " : "));
console.log(breadcrumbFunction("https://www.btplc.com/careercentre/Technology.htm", " / "));
console.log(breadcrumbFunction("https://www.btplc.com/careercentre/vacancies/Technology.htm", " / "));
console.log(breadcrumbFunction("https://www.btplc.com/careercentre/index.htm", " / "));
console.log(breadcrumbFunction("https://www.btplc.com/careercentre/indexTest.htm", " / "));
console.log(breadcrumbFunction("https://www.btplc.com/careercentre/vacancies/Technology.htm?p=fibre", " / "));
console.log(breadcrumbFunction("https://www.btplc.com/careercentre/vacancies/Technology.htm#Requirements", " / "));

function breadcrumbFunction(url, separator){
    let urlParts = url.split("/").slice(3);
    if (urlParts.slice(-1)[0].startsWith("index.")) {
        urlParts.pop();
    }
    let breadcrumbs = urlParts.map(createBreadcrumb);
    return "<a href=\"/\">HOME</a>" + separator + breadcrumbs.join(separator);
}

function createBreadcrumb(urlPart, i, arr){
    if(arr.length - 1 === i){
        return `<span class="active">${urlPart.toUpperCase().split('.')[0]}</span>`;
    } else {
        return `<a href="/${arr.slice(0, i+1).join("/").toUpperCase()}/">${urlPart.toUpperCase()}</a>`;
    }
}