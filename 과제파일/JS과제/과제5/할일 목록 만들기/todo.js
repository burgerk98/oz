// 요소 선택 및 배열 선언
const todoList = document.getElementById("todo-list")
const todoForm = document.getElementById("todo-form")
let todoArr =  [];

//로컬 저장소에 저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos", todoString)
}

//로컬 저장소에서 가져오기
function loadTodos(){
    const myTodos = localStorage.getItem("myTodos")
    if(myTodos !== null){
    todoArr = JSON.parse(myTodos)
    displayTodos()
    }
}
loadTodos()


//할일 삭제하기
function handleTodoDelBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })
    displayTodos()
    saveTodos()
}


//할 일 수정하기 느낌표는 반전시키는것
function handleTodoItemClick(clickedId){
    todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            return {
                ...aTodo, todoDone: !aTodo.todoDone
            }
        }else{
            return aTodo
        }
    })
    displayTodos()
    saveTodos()
}

//할일 보여주기
function displayTodos(){
    //입력한 값 지워주기(li가 매번 새로 생성되기 때문)
    todoList.innerHTML = ""

    //입력한 값 li로 나타내기
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement("li")
        
        //li값 삭제하기
        const todoDelBtn = document.createElement("span")
        todoDelBtn.textContent = "x"

        todoItem.textContent = aTodo.todoText

        todoItem.title = "클릭하면 완료"
        if(aTodo.todoDone){
            todoItem.classList.add("done")
        }else{
            todoItem.classList.add("yet")
        }
        todoDelBtn.title = "클릭하면 삭제"

        todoItem.addEventListener("click", function(){
            handleTodoItemClick(aTodo.todoId)
        })

        todoDelBtn.addEventListener("click", function(){
            handleTodoDelBtnClick(aTodo.todoId)
        })

        //todoItem에 todoDelBtn추가하기
        todoItem.appendChild(todoDelBtn)

        todoList.appendChild(todoItem)
    })
}

// 할 일 추가하기
todoForm.addEventListener("submit", function(e){
    //submit 새로고침 없어져라
    e.preventDefault()

    //할일이라는 데이터 생성하기
    const toBeAdded = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        todoDone: false
    }
    //투두에 작성한 내용 입력되면 지우기
    todoForm.todo.value = ""
    //추가하기
    todoArr.push(toBeAdded)
    displayTodos()
    saveTodos()
})