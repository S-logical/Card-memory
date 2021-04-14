import React from 'react';
import "./style.css";
const randomArr = [];
const randomImgArr = [];
const arrysforgrid = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const imgArray = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2o4YZrXq22nclthWhtQmC9ebaxqzouRFzw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3xMKXn4sa44gElXT3V1EPzAO_mPmnGgqag&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyLCbOSpdAvlPrS0jwuwXwK6NBbebPLlEgQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz-kkZbZ9JcejL1Lv7uW2Z_tYKSjiInv6Wg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOAjONstVos5Gqi7oQ8m_Mffvb7HW5YhATw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLgabn0TQdJJmqFAHPmjShEtLRtLJ03n2zw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAS3yVeCEyRC5Mql9Vmmb1n2PVCcDapHcTg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmRGg23-_u5YdRHiA8n8YkBo7EjiKcR9UZA&usqp=CAU",
    ];

const Grid = () => {
    let idCount = 0;
    let imgSrcNext = "", imgSrcPrev = "";
    let clickedImgPrev;
    let clickedImgNext;


   const handleImgclick = (event)=>{
       clickedImgPrev = clickedImgNext;
       clickedImgNext = event.target;
       clickedImgNext.setAttribute("src",randomImgArr[clickedImgNext.getAttribute('id')]);
       if(!clickedImgPrev || imgSrcNext===""){
           imgSrcNext = clickedImgNext.getAttribute("src");
       }
       else{
           imgSrcPrev = imgSrcNext;
           imgSrcNext = clickedImgNext.getAttribute("src");
           if(imgSrcPrev!==imgSrcNext){
           setTimeout(()=>{
          
               clickedImgNext.setAttribute("src","https://img.freepik.com/free-vector/abstract-violet-pixel-rain-background_23-2148362568.jpg?size=626&ext=jpg");
               clickedImgPrev.setAttribute("src",'https://img.freepik.com/free-vector/abstract-violet-pixel-rain-background_23-2148362568.jpg?size=626&ext=jpg');
           },1000);
           imgSrcNext = "";
           imgSrcPrev = "";
            }
            else{
                clickedImgNext.style.opacity = "0.3";
                clickedImgPrev.style.opacity = "0.3";
                clickedImgPrev=undefined;
                clickedImgNext=undefined;
            }
       }
   }
    
    while(randomArr.length <16){
        let randomNum = Math.floor((Math.random()*16)+0);
        if(randomArr.includes(randomNum)===false){
            randomArr.push(randomNum);
            randomImgArr.push(imgArray[randomNum]);
            // console.log(randomArr);
        }
    }
    return (
        <div id='main' style={ { "width":"80%", "margin": "100px auto" , "display":"flex" } }>
            {arrysforgrid.map((item)=>{
                return(
                    <div key={item} style={{"width":"50px", "height":"50px", "border":"1px solid coral" }} onClick={handleImgclick} >
                        <img width='50px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfxGXd04FOgDvbaoQQmSzhknz0jqlJ9q4Jg&usqp=CAU"></img>
                    </div>    
                );
            })}
        </div>
    );
};

export default Grid;