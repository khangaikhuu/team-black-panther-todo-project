// Date

let now = new Date();
let years = now.getFullYear();
let months = now.getMonth() + 1;
let days = now.getDate();

let myTimer = document.getElementById('myTimer');
myTimer.innerHTML = `Year Month Days: ${years}-${months}-${days}`;

//List adder
window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (a) => {
        a.preventDefault();

        const task = input.value;

        //Checking input area
        if (!task) {
            alert("Жагсаалтаа оруулна уу.");
            return;
        }

        //List add action 
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        //Edit
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        //Done 
        const task_done_el = document.createElement("button");
        task_done_el.classList.add("done");
        task_done_el.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;

        //Delete
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = `<i class="bi bi-trash-fill myDelete"></i>`;

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_done_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        //Edit and Confirm Action
        task_edit_el.addEventListener("click", () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerHTML = "Save";
                task_done_el.disabled = true;
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
                task_done_el.disabled = false;
            }
        });

        //Done action
        task_done_el.addEventListener("click", () => {
            task_input_el.style.textDecoration = "line-through";
            if (task_edit_el.addEventListener('click', () => {
                task_input_el.style.textDecoration = "none";
            }));
        })

        //Delete action
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});