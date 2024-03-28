		
	var getpost=document.getElementsByClassName("post")
	var getinput=document.getElementById("input")
	var getbtn=document.getElementById("btn")
	
	var getparapost=document.getElementById("parapost")
	var getdp=document.getElementsByClassName("rounded-circle")
	var gethead=document.getElementsByClassName("cardtitle")
	
					
		getbtn.addEventListener('click',function(e){
			readPost()
			
		})
		// <!-- function outside create new obj create  -->
		var data={}
		
		function readPost(){
			// <!-- obj add key and value  -->
			// <!-- functionname[key]=value -->
			data['text']=getinput.value
			data['head']=gethead.value
			console.log(data);
			
			createPost()
		}
		
		function createPost(){
			getparapost.innerHTML+=`<div class="post-detail">
			    <div class="post-logo">
					<img src="img/tom.jpg" class="rounded-circle border border-primary border-3" width="50px" height="50px"alt="...">
					<div class="post-title">
					<h5>Tom Russo</h5>
					<h6>Photography</h6>
					</div>
				</div>
				<small class="post-text"> ${data.text}</small>
				 <div class="post-option">
					<i Onclick="editpost(this)" class="bi bi-pencil-square"></i>
					<i Onclick="deletepost(this)" class="bi bi-trash3"></i>
					<i Onclick="likepost(this)" id="heart" class="bi bi-hand-thumbs-up"></i>
			    </div>
				<div class="img-collection">
				  <img src="https://picsum.photos/200/300" class="post-img">
				</div>
			   
				</div>`

			input.value=''
		}
		
		
		function editpost(e){	
		   
		   input.value=e.parentElement.previousElementSibling.innerHTML;
		   e.parentElement.parentElement.remove()
		
		}			
							
		function deletepost(e){	
		   e.parentElement.parentElement.remove()
		
		}		
		
		
		var num=true;
		function likepost(e){	
			var by=document.getElementById("heart");
			var count=0;
		    
			if(num==true){
				by.innerHTML=count+1;
				by.style.color="blue";
				num=false;
			}
			else{
				by.innerHTML=count;
				by.style.color="black";
				num=true;
			}

		} 