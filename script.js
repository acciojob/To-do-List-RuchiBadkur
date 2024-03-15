//your code here
const input = document.querySelector("#newTodoInput");
const addBtn = document.querySelector("#addTodoBtn");
const list =  document.querySelector("#todoList");

const addItems = () => {
	
	console.log(input.value);
// First validate the item if it is not an empty string before adding it as a list item.
// Do not allow empty submission of todo items.
	if (input.value === null || input.value === "" ||  input.value === " "  ) {
		alert("Please enter the task!") ;
	}else{

		// After typing some text in the input and clicking Add todo button 
		// that item should be inserted into the ordered list as a list item (li tag);
		const li = document.createElement("li");
		const text = document.createTextNode(input.value);
		li.appendChild(text);
		list.appendChild(li);
		
		
		// After clicking todo the input should be replaced with empty string.
		input.value = "";
	}
}

addBtn.addEventListener('click', addItems);
