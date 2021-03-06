
window.onload = function () {
  
  
    // Handle new profile redirect
    var newProfileButton = document.getElementById('newProfile');
    if(newProfileButton){
      newProfileButton.addEventListener('click', createNewProfile);
    }
    function createNewProfile () {
      location.href = '/Code/newProfile.html';
    }
  
    //Handle going back
    var cancelProfileButton = document.getElementById('cancelProfile');
    if(cancelProfileButton){
      cancelProfileButton.addEventListener('click', cancelProfile);
    }
    function cancelProfile(){
      location.href = '/Code/popup.html';
    }
  
  
    var addWorkExButton = document.getElementById('addWorkEx');
    if(addWorkExButton){
      addWorkExButton.addEventListener('click', addNewWorkEx);
    }
    function addNewWorkEx() {
      var WE = document.getElementById("WE");
      var divEntry = document.createElement('div');
      divEntry.className = "wex";
      var newWE = document.getElementsByClassName("wex")[0];
      divEntry.innerHTML = newWE.innerHTML;
      WE.appendChild(divEntry);
      assignIdsWorkEx();
    }
  
    function assignIdsWorkEx(){
      var workexs = document.getElementsByClassName('wex');
      var delworkexs = document.getElementsByClassName('delWex');
      console.log(workexs.length);
      for(var i=0;i<workexs.length;i++){
        workexs[i].id = 'workexperience'+(i+1);
        delworkexs[i].id='delworkex'+(i+1);
        document.getElementById('delworkex'+(i+1)).addEventListener('click', function(){
          var delID = this.parentNode.id;
          if(delID!='workexperience1'){
            var entry = document.getElementById(delID);
            console.log(entry);
            entry.remove(); 
          }
          assignIdsWorkEx();
        });
      }
    }
  
    var addEducationButton = document.getElementById('addEdu');
    if(addEducationButton){
      addEducationButton.addEventListener('click', addEducation);
    }
    function addEducation() {
      var EDU = document.getElementById('EDU');
      var divEntry = document.createElement('div');
      divEntry.className = "edu";
      var newEDU = document.getElementsByClassName("edu")[0];
      divEntry.innerHTML = newEDU.innerHTML;
      EDU.appendChild(divEntry);
      assignIdsEducation();
    }
  
    function assignIdsEducation(){
      var edus = document.getElementsByClassName('edu');
      var deledus = document.getElementsByClassName('delEdu');
      console.log(edus.length);
      for(var i=0;i<edus.length;i++){
        edus[i].id = 'education'+(i+1);
        deledus[i].id='deleducation'+(i+1);
        document.getElementById('deleducation'+(i+1)).addEventListener('click', function(){
          var delID = this.parentNode.id;
          if(delID!='education1'){
            var entry = document.getElementById(delID);
            console.log(entry);
            entry.remove(); 
          }
          assignIdsEducation();
        });
      }
    }
  
  
  }