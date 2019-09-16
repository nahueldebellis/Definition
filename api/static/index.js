	let txt = document.getElementById('text');
	txt.addEventListener('keypress', function(event){
		document.execCommand ('bold', false, null);		
		if(event.key === ' ' || event.key === "Spacebar"){
			let word = txt.value.split(' ').slice(-1);
			fetch('/word/'+word).then(res => { res.json().then(data => recomendation(data))} );
		}
	});

	function changeWords(){
		let syn = document.querySelectorAll('#synonym_list li');
		for (let i = 0; i < syn.length; i++) {
			syn[i].addEventListener('click', function(){
				let word = txt.value.split(' ');
				word[word.length-2] = syn[i].innerHTML;
				txt.value = word.join(' ');
			});
		}
	}

	function recomendation(data){
		document.getElementById('definition').innerHTML = data['definition'] || "...";
		const synonym_list = document.getElementById('synonym_list');					
		let child = synonym_list.lastElementChild;  
		while (child) { 
			synonym_list.removeChild(child); 
			child = synonym_list.lastElementChild; 
		}
		data['synonyms'].map((synonym)=>{
			let node = document.createElement("li");
			let textnode = document.createTextNode(synonym);
			node.className = 'synonym';
			node.appendChild(textnode);
			synonym_list.appendChild(node);
			changeWords();
		})
	}


