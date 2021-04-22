const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        return await response.json()
      }catch (error) {
       
      }
  }

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let url = document.getElementById('name').value
    if(Client.checkUrl(url)){

        postData('http://localhost:8081/add-url', { url }).then((data) => {
            updateTheREsults(data)
        })

    }else{
        alert('try with valid url')
    }

    
}

export { handleSubmit }


function updateTheREsults(data){
    alert('yeeeeeeeeeep');
    document.getElementById("results").innerHTML = `
    score_tag : ${data.score_tag}
    agreement : ${data.agreement}
    subjectivity : ${data.subjectivity}
    confidence : ${data.confidence}
    irony : ${data.irony}
    text : ${data.sentence_list[0].text}
    `
}

