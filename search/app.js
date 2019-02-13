function buscar(){
    let texto = document.getElementById('texto').value
    document.getElementById("tabla1").innerHTML=''
    fetch('https://spreadsheets.google.com/feeds/list/1MywYpy-FJVrvnGO9lhU_mR9MmfSIsMXG-ig7KBeYtvk/1/public/values?alt=json')
    .then(res => res.json())
    .then(data =>{  
        for(let item of data.feed.entry){        
            let lines= item.gsx$content.$t.split(' ');
            for(let item2 of lines){
                if(item2!=null){
                    if(item2.includes(texto)){
                        document.getElementById("tabla1").innerHTML +=`
                        <tr>
                            <td><img src="${item.gsx$img.$t}"/></td>
                            <td>${item.gsx$id.$t}</td>
                            <td>${item2}</td>
                        </tr>
                        `
                    }    
                }
            }
        }
    }); 
}

// var data1=[];
// function getdata(){
//     for(let item of dirs){
//     $.get('../scenes/'+item+'/script.txt',{},function(content){
//         let temp={
//                 item:item,
//                 content:content
//             } 
//         document.getElementById("tabla1").innerHTML +=`
//         <tr>
//             <td>../scenes/${item}/images/chr_${item}a_r18.png</td>
//             <td>${item}</td>
//             <td>${content}</td>
//         </tr>`
//         // data1.push(temp)         
//         }); 

//     }
//     // console.log(data1)

// }

