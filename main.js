var input = document.getElementById('input');
var list = document.getElementById('list');
var remove = document.getElementsByClassName('remove');

updateButtons();

var removeList;
var checkList;
var editList;
var editInputActive = false;

function updateButtons() {
  removeList = document.querySelectorAll('.remove');
  Array.from(removeList).forEach(function(element) {
    element.addEventListener('click', function() {
      this.parentNode.remove();
    });
  });

  checkList = document.querySelectorAll('.check');
  Array.from(checkList).forEach(function(element) {
    element.addEventListener('click', function() {
      element.parentNode.classList.toggle('checked');
    });
  });

  editList = document.querySelectorAll('.edit');
  Array.from(editList).forEach(function(element) {
    element.addEventListener('click', function() {
      if (!editInputActive) {
        editInputActive = true;
        this.previousSibling.innerHTML = '<input id="editInput" placeholder="Enter new item name"></input>';
        var editInput = document.getElementById('editInput');
      }
    });
  });
};

document.onkeypress = function(e) {
  if (e.keyCode == 13 && (!input.value)) {
    e.preventDefault();
  }

  if (e.keyCode == 13 && input.value) {
    var inputValue = input.value;
    list.innerHTML += '<li class="item"><p>' + inputValue + '</p><button class="edit">Edit</button><button class="check">&#10004;</button><button class="remove">X</button></li>';
    input.value = '';
    updateButtons();
    e.preventDefault();
  }

  else if (e.keyCode == 13 && editInput.value) {
    editInput.parentNode.innerHTML = editInput.value;
    editInputActive = false;
  }
};


