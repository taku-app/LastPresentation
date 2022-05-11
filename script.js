function addList() {
  let input_area = document.getElementById('input_form');
  let input_value = input_area.value;
  let li_text = document.createElement('li');
  let span_date = document.createElement('span');
  const date = getNowYMD();
  span_date = date;
  li_text.innerHTML = input_value + "@_date_" + span_date;
  
  let parent = document.getElementById('frame');
  parent.appendChild(li_text);
  input_area.value = '';
}

function deleteList() {
  let parent = document.getElementById('frame');
  parent.innerHTML = '';
}

function getNowYMD(){
  let dt = new Date();
  let y = dt.getFullYear();
  let m = ("00" + (dt.getMonth()+1)).slice(-2);
  let d = ("00" + dt.getDate()).slice(-2);
  let result = y + "/" + m + "/" + d;
  return result;
}



