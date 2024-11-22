//each item

<div class="item" id="svelte">
  <input type="checkbox" id="checkbox3" class="checkbox" />
  <label for="checkbox3">Svelte</label>
</div>;

//2 arrays-  selectedFromLeft and selectedFromRight contains above item

selectedFromLeft.push(left);
selectedFromRight.push(right);

//array "selectedFromLeft" contains items from the leftcontainer - once some function is called remove those items(div element) from the leftcontainer and push into rightcontainer.
// and similiarly "selectedFromRight" array contains items from rightcontainer - once some function is called , remove all those items from the rightcontainer and push into leftcontainer.



 // Move selected items from left to right when the "single-left" button is clicked
 document.getElementById("single-left").addEventListener("click", function () {
    selectedFromLeft.forEach(item => {
      document.getElementById("rightcontainer").appendChild(item); // Move item to right container
      selectedFromRight.push(item); // Add the moved item to the right array
    });

    // Clear moved items from the left array
    selectedFromLeft = []; // Clear selectedFromLeft after moving
    selectedFromRight=[]

    console.log("Updated arrays after move to right:", selectedFromLeft, selectedFromRight);
  });

  // Move selected items from right to left when the "single-right" button is clicked
  document.getElementById("single-right").addEventListener("click", function () {
    selectedFromRight.forEach(item => {
      document.getElementById("leftcontainer").appendChild(item); // Move item to left container
      selectedFromLeft.push(item); // Add the moved item to the left array
    });

    // Clear moved items from the right array
    selectedFromLeft = []; // Clear selectedFromLeft after moving
    selectedFromRight=[]


    console.log("Updated arrays after move to left:", selectedFromLeft, selectedFromRight);
  });







//=============================================================


// console.log("========================================================");

  // Move selected items from left to right when the "single-left" button is clicked
  document.getElementById("single-left").addEventListener("click", function () {
    // Iterate over selected items in selectedFromLeft
    console.log(selectedFromLeft);
    if (selectedFromLeft.length !== 0) {
      selectedFromLeft.forEach((item) => {
        // Move item to the right container
        document.getElementById("rightcontainer").appendChild(item);
        // Add the moved item to selectedFromRight
        //selectedFromRight.push(item);
      });

      // Clear selectedFromLeft after moving
      selectedFromLeft = [];
      selectedFromRight = [];
      // Optionally, you could log the arrays to see the result
      // console.log("Selected from left after move: ", selectedFromLeft);
      // console.log("Selected from right after move: ", selectedFromRight);
    }
  });

  // Move selected items from right to left when the "single-right" button is clicked
  document
    .getElementById("single-right")
    .addEventListener("click", function () {
      // Iterate over selected items in selectedFromRight
      console.log(selectedFromRight);
      selectedFromRight.forEach((item) => {
        // Move item to the left container
        document.getElementById("leftcontainer").appendChild(item);
        // Add the moved item to selectedFromLeft
        // selectedFromLeft.push(item);
      });

      // Clear selectedFromRight after moving
      selectedFromLeft = [];
      selectedFromRight = [];
      // Optionally, you could log the arrays to see the result
      // console.log("Selected from right after move: ", selectedFromRight);
      // console.log("Selected from left after move: ", selectedFromLeft);
    });
