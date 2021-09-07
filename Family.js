var nam = document.getElementById('name')
var des = document.getElementById('description')
var photo = document.getElementById('photo')
var content = document.getElementById('content')


document.getElementById('add').addEventListener('click',()=>{
    if(photo.value == '' || nam.value == '' || des.value == ''){
        alert('Please enter all data')
    }else{
        document.getElementById('temp').style.display = "none"
        var pName =  document.createElement('p')
        var newName = document.createTextNode(nam.value)
        var pDes = document.createElement('p')
        var newDes = document.createTextNode(des.value)
        var newPhoto = document.createElement("img");
        newPhoto.src = photo.value
        pName.appendChild(newName)
        pName.id = "nameContent"
        pDes.appendChild(newDes)
        pDes.id = "desContent"
        newPhoto.id = "photoContent"
        content.appendChild(newPhoto)
        content.appendChild(pName)
        content.appendChild(document.createElement("br"))
        content.appendChild(pDes)
        content.appendChild(document.createElement("hr"))
    }
})
