document.addEventListener("DOMContentLoaded", function () {
  //The "DOMContentLoaded" event ensures JavaScript runs only after the HTML is fully loaded and parsed, avoiding errors with unavailable elements.
  let reactCheckbox = document.getElementById("checkbox1");
  let vueCheckbox = document.getElementById("checkbox2");
  let svelteCheckbox = document.getElementById("checkbox3");
  let jsCheckbox = document.getElementById("checkbox4");
  let htmlCheckbox = document.getElementById("checkbox5");
  let cssCheckbox = document.getElementById("checkbox6");
  let tsCheckbox = document.getElementById("checkbox7");
  let angularCheckbox = document.getElementById("checkbox8");
  let nextjsCheckbox = document.getElementById("checkbox9");
  let nodejsCheckbox = document.getElementById("checkbox10");
  let reactitem = document.getElementById("react");
  let vueitem = document.getElementById("vue");
  let svelteitem = document.getElementById("svelte");
  let jsitem = document.getElementById("js");
  let htmlitem = document.getElementById("html");
  let cssitem = document.getElementById("css");
  let tsitem = document.getElementById("ts");
  let angularitem = document.getElementById("angular");
  let nextjsitem = document.getElementById("nextjs");
  let nodejsitem = document.getElementById("nodejs");

  let entireLeftButton = document.getElementById("entire-left");
  let entireRightButton = document.getElementById("entire-right");

  let leftcontainer = document.getElementById("leftcontainer");
  let rightcontainer = document.getElementById("rightcontainer");

  let singleLeftButton = document.getElementById("single-left");
  let singleRightButton = document.getElementById("single-right");

  singleLeftButton.style.opacity = "0.5";
  singleRightButton.style.opacity = "0.5";

  // 1. SHIFTING ENTIRE LIST TO ENTIRE SIDE
  let allInLeftContainer = [];
  let allInRightContainer = [];

  entireLeftButton.addEventListener("click", function () {
    // Clear right container array
    allInRightContainer = [];

    // Add all items to the left container array
    allInLeftContainer = [
      reactitem,
      vueitem,
      svelteitem,
      jsitem,
      htmlitem,
      cssitem,
      tsitem,
      angularitem,
      nextjsitem,
      nodejsitem,
    ];

    // Clear the containers
    leftcontainer.innerHTML = "";
    rightcontainer.innerHTML = "";

    // Add the elements from allInLeftContainer to leftcontainer
    allInLeftContainer.forEach((item) => {
      leftcontainer.appendChild(item);
    });

    // Add the elements from allInRightContainer to rightcontainer
    allInRightContainer.forEach((item) => {
      rightcontainer.appendChild(item);
    });
     entireLeftButton.style.opacity="0.5";
     entireRightButton.style.opacity="1"
  });

  entireRightButton.addEventListener("click", function () {
    // Clear left container array
    allInLeftContainer = [];

    // Add all items to the right container array
    allInRightContainer = [
      reactitem,
      vueitem,
      svelteitem,
      jsitem,
      htmlitem,
      cssitem,
      tsitem,
      angularitem,
      nextjsitem,
      nodejsitem,
    ];

    // Clear the containers again
    leftcontainer.innerHTML = "";
    rightcontainer.innerHTML = "";

    // Add the elements from allInLeftContainer to leftcontainer
    allInLeftContainer.forEach((item) => {
      leftcontainer.appendChild(item);
    });

    // Add the elements from allInRightContainer to rightcontainer
    allInRightContainer.forEach((item) => {
      rightcontainer.appendChild(item);
    });
   
     entireRightButton.style.opacity="0.5"
     entireLeftButton.style.opacity="1"
  });

  // 2.SHIFTING ITEMS ONE BY ONE ON ENTIRE SIDES

  let selectedFromLeft = [];
  let selectedFromRight = [];

  function multipleselected(left, right) {
    selectedFromLeft.push(left);
    selectedFromRight.push(right);

    // if (selectedFromLeft.length !== 0) {
    //   singleLeftButton.style.opacity = "1";
    // }
    // if (selectedFromRight.length !== 0) {
    //   singleRightButton.style.opacity = "1";
    // }

    // Move selected items from left to right when the "single-right" button is clicked
    document
      .getElementById("single-right")
      .addEventListener("click", function () {
        if (selectedFromLeft.length !== 0) {
          selectedFromLeft.forEach((item) => {
            // Move item to the right container
            let rc = document.getElementById("rightcontainer");

            item[0].querySelector('input[type="checkbox"]').checked = false;
            rc.append(item[0]);
            singleRightButton.style.opacity="0.5"
          });

          // Clear selectedFromLeft and selectedFromRight after moving
          selectedFromLeft = [];
          selectedFromRight = [];
        }
      });

    // Move selected items from right to left when the "single-left" button is clicked
    document
      .getElementById("single-left")
      .addEventListener("click", function () {
        selectedFromRight.forEach((item) => {
          const lc = document.getElementById("leftcontainer");

          item[0].querySelector('input[type="checkbox"]').checked = false;
          lc.appendChild(item[0]);
          singleLeftButton.style.opacity="0.5"
        });

        selectedFromLeft = [];
        selectedFromRight = [];
      });
  }

  // react checkbox

  reactCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (reactCheckbox.checked && leftcontainer.contains(reactitem)) {
      left.push(reactitem);
       singleRightButton.style.opacity="1"
    } else if (reactCheckbox.checked && rightcontainer.contains(reactitem)) {
      right.push(reactitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    console.log(left, right);
    multipleselected(left, right);
  });

  // vue checkbox
  vueCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (vueCheckbox.checked && leftcontainer.contains(vueitem)) {
      left.push(vueitem);
       singleRightButton.style.opacity="1"
    } else if (vueCheckbox.checked && rightcontainer.contains(vueitem)) {
      right.push(vueitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });

  // svelte checkbox
  svelteCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (svelteCheckbox.checked && leftcontainer.contains(svelteitem)) {
      left.push(svelteitem);
       singleRightButton.style.opacity="1"
    } else if (svelteCheckbox.checked && rightcontainer.contains(svelteitem)) {
      right.push(svelteitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });

  // js checkbox
  jsCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (jsCheckbox.checked && leftcontainer.contains(jsitem)) {
      left.push(jsitem);
       singleRightButton.style.opacity="1"
    } else if (jsCheckbox.checked && rightcontainer.contains(jsitem)) {
      right.push(jsitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });

  // html checkbox
  htmlCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (htmlCheckbox.checked && leftcontainer.contains(htmlitem)) {
      left.push(htmlitem);
       singleRightButton.style.opacity="1"
    } else if (htmlCheckbox.checked && rightcontainer.contains(htmlitem)) {
      right.push(htmlitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }

    multipleselected(left, right);
  });

  // css checkbox
  cssCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (cssCheckbox.checked && leftcontainer.contains(cssitem)) {
      left.push(cssitem);
       singleRightButton.style.opacity="1"
    } else if (cssCheckbox.checked && rightcontainer.contains(cssitem)) {
      right.push(cssitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });

  // ts checkbox
  tsCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (tsCheckbox.checked && leftcontainer.contains(tsitem)) {
      left.push(tsitem);
      singleRightButton.style.opacity="1"
    } else if (tsCheckbox.checked && rightcontainer.contains(tsitem)) {
      right.push(tsitem);
       singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });

  // angular checkbox
  angularCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (angularCheckbox.checked && leftcontainer.contains(angularitem)) {
      left.push(angularitem);
       singleRightButton.style.opacity="1"
    } else if (
      angularCheckbox.checked &&
      rightcontainer.contains(angularitem)
    ) {
      right.push(angularitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });

  // nextjs checkbox
  nextjsCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (nextjsCheckbox.checked && leftcontainer.contains(nextjsitem)) {
      left.push(nextjsitem);
       singleRightButton.style.opacity="1"
    } else if (nextjsCheckbox.checked && rightcontainer.contains(nextjsitem)) {
      right.push(nextjsitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });

  // nodejs checkbox
  nodejsCheckbox.addEventListener("change", function () {
    let left = [];
    let right = [];
    if (nodejsCheckbox.checked && leftcontainer.contains(nodejsitem)) {
      left.push(nodejsitem);
       singleRightButton.style.opacity="1"
    } else if (nodejsCheckbox.checked && rightcontainer.contains(nodejsitem)) {
      right.push(nodejsitem);
      singleLeftButton.style.opacity="1"
    } else {
      console.log("Checkbox is unchecked");
    }
    multipleselected(left, right);
  });
});
