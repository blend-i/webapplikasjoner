window.onload = oppstart;

function oppstart() {
    var main = document.createElement("main");

    var body = document.querySelector("body");
    var selectBoxContainer = document.createElement("div");

    body.appendChild(main);

    var paragraf = document.createElement("p");
    paragraf.innerHTML = "Jeg trener på Javascript";
    paragraf.className = "paragraf";

    main.appendChild(paragraf);
    main.appendChild(selectBoxContainer);

    var selectBoxBil = document.createElement("select");
    var motor = document.createElement("option");
    motor.text = "Motor";

    var dekk = document.createElement("option");
    dekk.text = "Dekk";

    var vindu = document.createElement("option");
    vindu.text = "Vindu";

    var ratt = document.createElement("option");
    ratt.text = "Ratt";

    var katalisator = document.createElement("option");
    katalisator.text = "Katalisator";

    selectBoxBil.appendChild(motor);
    selectBoxBil.appendChild(dekk);
    selectBoxBil.appendChild(vindu);
    selectBoxBil.appendChild(ratt);
    selectBoxBil.appendChild(katalisator);

    selectBoxContainer.appendChild(selectBoxBil);

    main.style.width = "100%";

    selectBoxContainer.style.display = "flex";
    selectBoxContainer.style.justifyContent = "center";

    selectBoxBil.style.maxWidth = "500px";

    var testButton = document.createElement("button");
    testButton.innerHTML = "Test";
    var resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset";

    selectBoxContainer.appendChild(testButton);
    selectBoxContainer.appendChild(resetButton);


    testButton.addEventListener("click", function () {

        let splitParagraf = selectBoxBil.options[selectBoxBil.selectedIndex].textContent.split(" ");
        
            if(splitParagraf.length )
            for (i = 0; i < splitParagraf.length; i++) {
                splitParagraf[i] = splitParagraf[i].slice(1);
            }

            let nySplitParagraf = splitParagraf.join();

            let nySplitParagrafArray = nySplitParagraf.split("");

            let reversedParagraf = nySplitParagrafArray.reverse();

            let reversedJoinedParagraf = reversedParagraf.join("");

            paragraf.innerHTML = reversedJoinedParagraf;
    });

    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    main.appendChild(ul);

    const delete1 = document.createElement("button");
    delete1.innerHTML = "delete";

    const delete2 = document.createElement("button");
    delete2.innerHTML = "delete";

    const delete3 = document.createElement("button");
    delete3.innerHTML = "delete";

    const delete4 = document.createElement("button");
    delete4.innerHTML = "delete";


    let deleteButtons = [];
    deleteButtons.push(delete1);
    deleteButtons.push(delete2);
    deleteButtons.push(delete3);
    deleteButtons.push(delete4);


    ul.appendChild(li1);
    li1.appendChild(deleteButtons[0]);

    ul.appendChild(li2);
    li2.appendChild(deleteButtons[1]);

    ul.appendChild(li3);
    li3.appendChild(deleteButtons[2]);

    ul.appendChild(li4);
    li4.appendChild(deleteButtons[3]);


    deleteButtons[0].addEventListener("click", function () {
        ul.removeChild(li1);
    });
    deleteButtons[1].addEventListener("click", function () {
        ul.removeChild(li2);
    });
    deleteButtons[2].addEventListener("click", function () {
        ul.removeChild(li3);
    });
    deleteButtons[3].addEventListener("click", function () {
        ul.removeChild(li4);
    });

    resetButton.addEventListener("click", function () {
        deleteButtons.push(delete1);
        deleteButtons.push(delete2);
        deleteButtons.push(delete3);
        deleteButtons.push(delete4);

        ul.appendChild(li1);
        li1.appendChild(deleteButtons[0]);

        ul.appendChild(li2);
        li2.appendChild(deleteButtons[1]);

        ul.appendChild(li3);
        li3.appendChild(deleteButtons[2]);

        ul.appendChild(li4);
        li4.appendChild(deleteButtons[3]);
    });
}