function createCard(title, cName, views, monthsOld) {
    let views2;
    let x;
    if (views < 1000000) {
        x = views / 1000;
        views2 = x.toFixed(1) + "K";
    }
    else if (views > 1000000) {
        x = views / 1000000;
        views2 = x.toFixed(1) + "M";
    }
    else{
        views2 = views;
    }


    let html =` <div class="card">
        <div class="image"> <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWfGPsuQKuWateaRbWeBo1MDhM3A" alt="">31:00</img>
        
        </div>

        <div class="text">
            <h1>
                ${title}
            </h1>
            ${cName} . ${views2} . ${monthsOld} months ago
        </div>
    </div>`

    document.querySelector(".container").innerHTML+=html;

    
}

createCard("Introduction to BackEnd | Sigma Web Development Course #2", "Ankush Ratnani", 722000, 2);
