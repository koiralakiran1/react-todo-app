(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){t.exports=n(20)},12:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);n(12);var a=n(2),i=n(3),o=n(5),r=n(4),l=n(6),s=(n(8),n(0)),c=n.n(s),u=n(1),m=n(7),d=function(t){return c.a.createElement("form",{className:"add_item_bar form-group",onSubmit:t.onSubmit},c.a.createElement("input",{type:t.type,placeholder:t.placeholder,className:"form-control",onChange:t.onChange,value:t.value}))},h=function(t){return t.item.editingStatus?c.a.createElement("li",{className:t.item.doneStatus?"done_task_item list-group-item todo_list_item":"list-group-item todo_list_item",key:"item_"+t.myKey},c.a.createElement("form",{className:"list_item_edit_form",onSubmit:function(e){return t.onEditSubmit(t.item.id,e)}},c.a.createElement("input",{type:"text",onChange:function(e){return t.onEditingChange(t.item.id,e)},value:t.item.todoContent}),c.a.createElement("p",null,c.a.createElement("em",null,"Press Enter To Save")))):c.a.createElement("li",{className:t.item.doneStatus?"done_task_item list-group-item todo_list_item":"list-group-item todo_list_item",key:"item_"+t.myKey,id:t.item.id},c.a.createElement("div",{className:"list_item_display_text"},c.a.createElement("input",{type:"checkbox",checked:t.item.doneStatus?"checked":"",onChange:function(e){return t.handleCheckBoxChange(t.item.id,e)},id:"input_"+t.myKey}),c.a.createElement("label",{className:t.item.doneStatus?"done_task_text":""},t.item.todoContent)),c.a.createElement("div",{className:"list_btn_group"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return t.onEdit(t.item.id,e)}},c.a.createElement("i",{className:"fas fa-pen-nib"})),c.a.createElement("button",{className:"btn btn-danger",onClick:function(e){return t.onDelete(t.item.id,e)}},c.a.createElement("i",{className:"fas fa-times"}))))},f=function(t){return c.a.createElement("ul",{className:"list-group"},t.items.map(function(e,n){return c.a.createElement(h,{item:e,key:n,myKey:n,handleCheckBoxChange:t.handleCheckBoxChange,onEditingChange:t.onEditingChange,onDelete:t.onDelete,onDone:t.onDone,onEdit:t.onEdit,onEditSubmit:t.onEditSubmit})}))},p={all:"all",completed:"completed",remaining:"remaining"},g=function(t){return c.a.createElement("ul",{className:"nav nav-fill nav-tabs"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:t.currentList===p.all?"nav-link active":"nav-link",onClick:function(e){return t.setCurrentTab(e,p.all)}},"All")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:t.currentList===p.completed?"nav-link active":"nav-link",onClick:function(e){return t.setCurrentTab(e,p.completed)}},"Completed")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/",className:t.currentList===p.remaining?"nav-link active":"nav-link",onClick:function(e){return t.setCurrentTab(e,p.remaining)}},"Remaining")))},E=function(t){function e(t){var n;return Object(a.a)(this,e),(n=Object(o.a)(this,Object(r.a)(e).call(this,t))).handleOnChange=function(t){n.setState({currentText:t.target.value})},n.handleOnDelete=function(t,e){e.preventDefault();var a=Object(m.a)(n.state.todoList).filter(function(e){return e.id!==t});n.setState({todoList:a})},n.handleOnDone=function(t,e){var a=n.state.todoList.map(function(e){return e.id===t?Object(u.a)({},e,{doneStatus:!e.doneStatus}):Object(u.a)({},e)});n.setState({todoList:a})},n.handleOnEdit=function(t,e){e.preventDefault();var a=n.state.todoList.map(function(e){return e.id===t?Object(u.a)({},e,{editingStatus:!e.editingStatus}):Object(u.a)({},e)});n.setState({todoList:a})},n.handleOnSubmit=function(t){t.preventDefault();var e={todoContent:n.state.currentText,doneStatus:!1,editingStatus:!1,id:Date.now().toString()},a=[].concat(Object(m.a)(n.state.todoList),[e]);n.setState({todoList:a,currentText:""})},n.handleCheckBoxChange=function(t,e){n.handleOnDone(t,e)},n.handleEditChange=function(t,e){e.preventDefault();var a=n.state.todoList.map(function(n){return n.id===t?Object(u.a)({},n,{todoContent:e.target.value}):Object(u.a)({},n)});n.setState({todoList:a})},n.onEditSubmit=function(t,e){e.preventDefault();var a=n.state.todoList.map(function(n){return n.id===t?Object(u.a)({},n,{todoContent:e.target.childNodes[0].value,editingStatus:!n.editingStatus}):Object(u.a)({},n)});n.setState({todoList:a})},n.filterDisplayList=function(){switch(n.state.currentList){case p.all:return n.state.todoList;case p.completed:return n.state.todoList.filter(function(t){return t.doneStatus});case p.remaining:return n.state.todoList.filter(function(t){return!t.doneStatus});default:return n.state.todoList}},n.setCurrentTab=function(t,e){t.preventDefault(),n.setState({currentList:e})},n.componentDidUpdate=function(){window.localStorage.setItem("storageTodos",JSON.stringify(n.state.todoList))},n.componentDidMount=function(){var t=window.localStorage.getItem("storageTodos"),e=t?JSON.parse(t):[];window.localStorage.clear(),n.setState({todoList:e})},n.state={currentText:"",todoList:[],currentList:p.all},n}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,c.a.createElement("a",{href:"/"},"Todo App")),c.a.createElement(g,{setCurrentTab:this.setCurrentTab,currentList:this.state.currentList}),c.a.createElement(d,{value:this.state.currentText,type:"text",placeholder:"Add New TODO",onChange:this.handleOnChange,onSubmit:this.handleOnSubmit}),c.a.createElement(f,{handleCheckBoxChange:this.handleCheckBoxChange,items:this.filterDisplayList(),onDelete:this.handleOnDelete,onDone:this.handleOnDone,onEdit:this.handleOnEdit,onEditingChange:this.handleEditChange,onEditSubmit:this.onEditSubmit}))}}]),e}(s.Component),b=function(t){function e(){return Object(a.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null))}}]),e}(s.Component),v=n(10),C=n.n(v);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));C.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.b1e44273.chunk.js.map