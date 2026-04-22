let leads = []

const inputTxt = document.getElementById("inp-txt")
const button = document.getElementById("btn")
const unlist = document.getElementById("unlist")
const deleteBtn = document.getElementById("del-btn")
const saveBtn = document.getElementById("save-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"))



if (leadsFromLocalStorage) {
    leads = leadsFromLocalStorage
    render(leads)
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    leads = []
    render(leads)
})

button.addEventListener("click", function () {
    leads.push(inputTxt.value)
    inputTxt.value = ""
    localStorage.setItem("leads", JSON.stringify(leads))
    render(leads)
})

saveBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        leads.push(tabs[0].url)
        localStorage.setItem("leads", JSON.stringify(leads))
        render(leads)
    })
})

function render(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        listItem += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }
    unlist.innerHTML = listItem
}