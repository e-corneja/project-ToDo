let tasksContainer = document.querySelector(".tasks");
let pushBtn = document.querySelector("#push");
let newInput = document.querySelector("#new-taskInput");

let todoList = {
  items: [],
  printAll: function () {
    tasksContainer.innerText = "";
    for (let i of this.items) {
      let taskContainer = document.createElement("div");
      let taskText = document.createElement("div");
      let deleteBtn = document.createElement("img");
      let completedBtn = document.createElement("img");

      taskText.innerText = i.name;
      deleteBtn.src = "./img/delete_FILL0_wght400_GRAD0_opsz48.png";
      completedBtn.src = "./img/done_white_24dp.svg";

      completedBtn.addEventListener("click", () => this.completed(i.id));
      deleteBtn.addEventListener("click", () => this.deleted(i.id));

      taskContainer.append(taskText);
      taskContainer.append(deleteBtn);
      taskContainer.append(completedBtn);

      taskContainer.classList.add("taskInput");
      completedBtn.classList.add("completed-icon1");
      deleteBtn.classList.add("icon");
      if (i.completed) {
        taskContainer.classList.add("completed");
        completedBtn.src = "./img/close_white_24dp.svg";
        completedBtn.classList.add("completed-icon2");
      }

      tasksContainer.append(taskContainer);
    }
  },

  addTask: function () {
    let todo = newInput.value;
    if (todo !== "") {
      todoList.items.push({
        id: Math.round(Math.random() * 10000000000),
        name: todo,
        completed: false,
      });
      todoList.printAll();
    }
    newInput.value = "";
  },

  completed: function (id) {
    for (let i of this.items) {
      if (i.id === id) {
        i.completed = !i.completed;
      }
    }
    this.printAll();
  },

  deleted: function (id) {
    for (let i = 0; i < this.items.length; i++) {
      if (id === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
    this.printAll();
  },
};

pushBtn.addEventListener("click", todoList.addTask);

todoList.printAll();
