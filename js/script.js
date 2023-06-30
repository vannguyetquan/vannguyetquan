

const optionsEL = document.querySelector(".options");
      options.forEach((i) => {
        let option = document.createElement("a");
        option.classList.add(
          "option",
          "h-12",
          "bg-gray-700",
          "text-white",
          "block",
          "border-b",
          "border-gray-600",
          "flex",
          "items-center",
          "px-4"
        );
        option.innerHTML = i.name;
        option.setAttribute("href", i.url);
        optionsEL.appendChild(option);
      });
           
              // search function

      const optionsEls = document.querySelectorAll(".option");
      const searchEl = document.querySelector(".search");

      const search = () =>
        optionsEls.forEach(
          (e) =>
            (e.style.display =
              e.innerHTML.toUpperCase().indexOf(searchEl.value.toUpperCase()) >
              -1
                ? ""
                : "none")
        );
    // let names = [
//     "Quy tắc nuôi dưỡng của quỷ vương " ,
//     "Phát điên: Vượt khỏi cảnh giới",
//     "Kí sự người quen",
//   ];
//   let sortedNames = names.sort();
  
  //reference
  // let input = document.getElementById("input");
  
  //Execute function on keyup
  // input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    // removeElements();
    // for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
  
      // if (
      //   i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      //   input.value != ""
      // ) {
        //create li element
       
        // let listItem = document.createElement("li");
        
        //One common class name
        // listItem.classList.add("list-items");
        
        // listItem.style.cursor = "pointer";
        // listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        // let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        // word += i.substr(input.value.length);
        //display the value in array
      //   listItem.innerHTML = word;
      //   document.querySelector(".list").appendChild(listItem);
      // }
  //   }
  // });
  // function displayNames(value) {
  //   input.value = value;
  //   removeElements();
  // }
  // function removeElements() {
    //clear all the item
  //   let items = document.querySelectorAll(".list-items");
  //   items.forEach((item) => {
  //     item.remove();
  //   });
  // }

  
    

  