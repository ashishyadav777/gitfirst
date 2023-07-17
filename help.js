function addItem(event) {
    event.preventDefault();
    
    let input = document.getElementById('itemInput');
    let item = input.value.trim();
    
    if (item !== '') {
      let itemList = document.getElementById('itemList');
      let li = document.createElement('li');
      li.className = 'item';
      li.innerHTML = item + '<span><button onclick="removeItem(event)">Delete</button></span>';
      itemList.appendChild(li);
      
      input.value = '';
    }
  }
  
  function removeItem(event) {
    event.preventDefault();
    
    let li = event.target.closest('li');
    li.parentNode.removeChild(li);
  }