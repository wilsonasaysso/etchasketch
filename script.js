const container = document.querySelector('.container');

function createGrid(num){
    let pixels = document.querySelector('.container').offsetWidth;
    let size = pixels / num;
    for (i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.height = (size + "px");
        container.appendChild(row);
  
        for (j = 0; j < num; j++) {
          const col = document.createElement("div");
          col.className = "col";
          col.style.width = (size + "px");
          row.appendChild(col);
        }
      }
}

function removeGrid(parent){
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}


function changeColor(){
    const cols = document.querySelectorAll('.col');
    // Iterate over each ".col" element and add event listener
cols.forEach(col => {
    col.addEventListener('mouseover', function() {
        // Add a new class to the hovered element
        this.classList.add('hovered');
        // Change the background color of the hovered element
        this.style.backgroundColor = 'lightblue';
    });

    /*
    // Add event listener for mouseout to remove the added class and reset background color
    col.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
        this.style.backgroundColor = ''; // Reset background color
    });
    */
});
}

const button = document.getElementById("gridButton");

button.addEventListener('click', () => {
    removeGrid(container);
    let size = prompt("Input a number:");
    let sizeInt = parseInt(size);
    while (sizeInt > 100) {
        size = prompt("Must be less than 100. Try again.");
        sizeInt = parseInt(size);
    }
    createGrid(sizeInt);
    changeColor();
});
