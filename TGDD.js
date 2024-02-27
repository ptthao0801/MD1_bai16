
let itemname=['áo khoác blazer dáng suông','áo khoác tweed cổ tròn']

// nut search
function searchItem(){
    let valueSearchInput = document.getElementById('search').value
    let itemSearch
}

// nut mua ngay -> add to cart
let total = 0
let cart = "<td id=\"giohang\">GIỎ (" + total+")</td>\n"
document.getElementById("cart").innerHTML = cart
function addtocart() {
    total++
    return total
}

// an vao gio ra