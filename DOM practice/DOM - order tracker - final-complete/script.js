document.addEventListener("DOMContentLoaded", function () {
  //DOMContentLoaded is an event in JavaScript that triggers when the HTML document has been completely loaded and parsed( browser reads and understands the HTML code to create a structure it can display and work with.), without waiting for stylesheets, images, and subframes to finish loading.
  let counter = 1;

  const counterElement = document.getElementById("counter");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");
  const circel1Active = document.getElementById("circle1");
  const circel2Active = document.getElementById("circle2");
  const circel3Active = document.getElementById("circle3");
  const circel4Active = document.getElementById("circle4");
  const result = document.getElementById("result");
  const pipe1active = document.getElementById("pipe1");
  const pipe2active = document.getElementById("pipe2");
  const pipe3active = document.getElementById("pipe3");
  circel1Active.classList.add("active");
  circel2Active.classList.remove("active");
  circel3Active.classList.remove("active");
  circel4Active.classList.remove("active");
  result.textContent = "Add contact details for further communications";
  let circle1done = false;
  let circle2done = false;
  let circle3done = false;
  let circel4done = false;
  decrementButton.disabled = true;

  // Apply blur effect to the button
  decrementButton.style.filter = "blur(0px)";
  decrementButton.style.cursor="not-allowed"
  // Increment counter
  incrementButton.addEventListener("click", function () {
    if (counter >= 1 && counter <= 5) {
      counter++;
      //counterElement.textContent = counter;
      console.log(counter);
    }
    if (counter == 1) {
      circle1done = true;
      circle2done = false;
      circle3done = false;
      circel4done = false;

      circel1Active.classList.add("active");
      circel2Active.classList.remove("active");
      circel3Active.classList.remove("active");
      circel4Active.classList.remove("active");
      result.textContent = "Add contact details for further communications";
      // Set button text content
      decrementButton.textContent = "Previous";
      incrementButton.textContent = "Next";
      // Disable the button
      decrementButton.disabled = true;

      // Apply blur effect to the button
      decrementButton.style.filter = "blur(0px)";
       decrementButton.style.cursor="not-allowed"
    } else if (counter == 2) {
      circle1done = true;
      circle2done = true;
      circle3done = false;
      circel4done = false;

      // Create an img element
      let imgElement = document.createElement("img");

      imgElement.src = "checked.png";

      imgElement.alt = "Circle Image";
      imgElement.style.width = "50px";
      imgElement.style.height = "50px";

      circel1Active.innerHTML = ""; // Clear previous content if needed
      circel1Active.appendChild(imgElement); // Add the image element

      circel2Active.classList.add("active");
      circel1Active.classList.remove("active");

      circel3Active.classList.remove("active");
      circel4Active.classList.remove("active");

      pipe1active.classList.add("done");
      circel1Active.classList.add("done");
      result.textContent = "Add shipping address for successful Delivery";
      // Set button text content
      decrementButton.textContent = "Previous";

      // Disable the button
      decrementButton.disabled = false;

      // Apply blur effect to the button
      decrementButton.style.filter = "blur(0px)";
      decrementButton.style.cursor = "pointer";

      incrementButton.textContent = "Next";
    } else if (counter == 3) {
      circle1done = true;
      circle2done = true;
      circle3done = true;
      circel4done = false;

      // Create an img element
      let imgElement = document.createElement("img");

      imgElement.src = "checked.png";

      imgElement.alt = "Circle Image";
      imgElement.style.width = "50px";
      imgElement.style.height = "50px";
      circel2Active.innerHTML = ""; // Clear previous content if needed
      circel2Active.appendChild(imgElement); // Add the image element

      circel3Active.classList.add("active");
      circel2Active.classList.remove("active");
      circel1Active.classList.remove("active");

      circel4Active.classList.remove("active");

      pipe1active.classList.add("done");
      circel1Active.classList.add("done");
      pipe2active.classList.add("done");
      circel2Active.classList.add("done");
      result.textContent = "Complete payment to complete the Order";
      // Set button text content
      decrementButton.textContent = "Previous";

      // Disable the button
      decrementButton.disabled = false;

      // Apply blur effect to the button
      decrementButton.style.filter = "blur(0px)";
      decrementButton.style.cursor = "pointer";
      incrementButton.textContent = "Next";
    } else if (counter == 4) {
      circle1done = true;
      circle2done = true;
      circle3done = true;
      circel4done = true;

      // Create an img element
      let imgElement = document.createElement("img");

      imgElement.src = "checked.png";

      imgElement.alt = "Circle Image";
      imgElement.style.width = "50px";
      imgElement.style.height = "50px";

      circel3Active.innerHTML = ""; // Clear previous content if needed
      circel3Active.appendChild(imgElement); // Add the image element

      circel4Active.classList.add("active");
      circel3Active.classList.remove("active");
      circel2Active.classList.remove("active");
      circel1Active.classList.remove("active");

      pipe1active.classList.add("done");
      circel1Active.classList.add("done");
      pipe2active.classList.add("done");
      circel2Active.classList.add("done");
      pipe3active.classList.add("done");
      circel3Active.classList.add("done");

      // counterElement.textContent = "Ready to get Delivered !";
      result.textContent = "Ready to get Delivered !";
      incrementButton.textContent = "Finish";
      // Set button text content
      decrementButton.textContent = "Previous";

      // Disable the button
      decrementButton.disabled = false;

      // Apply blur effect to the button
      decrementButton.style.filter = "blur(0px)";
      // incrementButton.textContent="Next"
      decrementButton.style.cursor = "pointer";
    } else if (counter == 5) {
      circle1done = true;
      circle2done = true;
      circle3done = true;
      circel4done = true;

      // Create an img element
      let imgElement = document.createElement("img");

      imgElement.src = "checked.png";

      imgElement.alt = "Circle Image";
      imgElement.style.width = "50px";
      imgElement.style.height = "50px";
      circel4Active.innerHTML = ""; // Clear previous content if needed
      circel4Active.appendChild(imgElement); // Add the image element

      circel4Active.classList.add("active");
      circel3Active.classList.remove("active");
      circel2Active.classList.remove("active");
      circel1Active.classList.remove("active");

      pipe1active.classList.add("done");
      circel1Active.classList.add("done");
      pipe2active.classList.add("done");
      circel2Active.classList.add("done");
      pipe3active.classList.add("done");
      circel3Active.classList.add("done");
      circel4Active.classList.add("done");

      // counterElement.textContent = "Ready to get Delivered !";
      result.textContent = "Order Delivered Succesfully🎉🎉🎉";

      // Set button text content
      decrementButton.remove();
      incrementButton.textContent = "Refresh";
      // Apply blur effect to the button
      decrementButton.style.cursor = "pointer";
    } else if (counter == 6) {
      // Hard reload the page (without cache)
      window.location.reload(true);
    }
  });

  // Decrement counter
  decrementButton.addEventListener("click", function () {
    if (counter >= 2 && counter <= 5) {
      counter--;
      //counterElement.textContent = counter;
    } 
    if (counter == 1) {
      circle1done = true;
      circle2done = false;
      circle3done = false;
      circel4done = false;
      circel1Active.classList.add("active");
      circel2Active.classList.remove("active");
      circel3Active.classList.remove("active");
      circel4Active.classList.remove("active");
      pipe1active.classList.remove("done");
      circel1Active.classList.remove("done");

      let divElement = document.createElement("div");

      divElement.textContent = 1;

      circel1Active.innerHTML = ""; // Clear previous content if needed
      circel1Active.appendChild(divElement); // Add the div element
      result.textContent = "Add contact details for further communications";
      // Set button text content
      decrementButton.textContent = "Previous";

      // Disable the button
      decrementButton.disabled = false;

      // Apply blur effect to the button
      decrementButton.style.filter = "blur(0px)";
      incrementButton.textContent = "Next";
     decrementButton.style.cursor="not-allowed"
    } else if (counter == 2) {
      circle1done = false;
      circle2done = true;
      circle3done = false;
      circel4done = false;
      circel2Active.classList.add("active");
      circel1Active.classList.remove("active");

      circel3Active.classList.remove("active");
      circel4Active.classList.remove("active");

      pipe2active.classList.remove("done");
      circel2Active.classList.remove("done");
      let divElement = document.createElement("div");

      divElement.textContent = 2;

      circel2Active.innerHTML = ""; // Clear previous content if needed
      circel2Active.appendChild(divElement); // Add the div element
      result.textContent = "Add shipping address for successful Delivery";
      // Set button text content
      decrementButton.textContent = "Previous";

      // Disable the button
      decrementButton.disabled = false;

      // Apply blur effect to the button
      decrementButton.style.filter = "blur(0px)";
      incrementButton.textContent = "Next";
      decrementButton.style.cursor = "pointer";
    } else if (counter == 3) {
      circle1done = false;
      circle2done = false;
      circle3done = true;
      circel4done = false;
      circel3Active.classList.add("active");
      circel2Active.classList.remove("active");
      circel1Active.classList.remove("active");

      circel4Active.classList.remove("active");

      pipe3active.classList.remove("done");
      circel3Active.classList.remove("done");
      // Create an div element
      let divElement = document.createElement("div");

      divElement.textContent = 3;

      circel3Active.innerHTML = ""; // Clear previous content if needed
      circel3Active.appendChild(divElement); // Add the div element
      result.textContent = "Complete payment to complete the Order";
      // Set button text content
      decrementButton.textContent = "Previous";

      // Disable the button
      decrementButton.disabled = false;

      // Apply blur effect to the button
      decrementButton.style.filter = "blur(0px)";
      incrementButton.textContent = "Next";
      decrementButton.style.cursor = "pointer";
    }
  });
});
