window.addEventListener('load',()=> {
  const form = document.querySelector('#new-file');
  const name=document.querySelector('#new-name');
  const roll=document.querySelector('#new-roll');
  const list_el=document.querySelector('#tableBody');


    form.addEventListener('submit',(e)=> {
      e.preventDefault();
      const task= name.value;
      if(!task){
        alert("Please enter Name");
        return;
      }
        const sheet= roll.value;
        if(!sheet){
          alert("Please enter Roll No.");
          return;
      }

      const task_el=document.createElement('td');
      task_el.classList.add('input.list-a');

      const task_content_el =document.createElement('td');
      task_content_el.classList.add('list-a');
      task_content_el.innerText= task;

      task_el.appendChild(task_content_el);

      list_el.appendChild(task_el);


      const sheet_el=document.createElement('td');
      sheet_el.classList.add('input.list-b');

      const sheet_content_el =document.createElement('td');
      sheet_content_el.classList.add('list-b');
      sheet_content_el.innerText= sheet;

      sheet_el.appendChild(sheet_content_el);
      list_el.appendChild(sheet_el);


      const present=document.createElement('td');
      present.classList.add('input.list-c');

      const present_content_el =document.createElement('td');
      present_content_el.classList.add('list-c');
      present_content_el.innerText= "Present";

      present.appendChild(present_content_el);
      list_el.appendChild(present);

      const task_actions_el = document.createElement('div');
  		task_actions_el.classList.add('actions');

      const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';
    task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
    task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

    })
})
