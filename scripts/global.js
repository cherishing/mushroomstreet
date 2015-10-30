window.onload=function(){
      	var oPic=document.getElementById('pic');
      	var oPre=document.getElementById('pre');
      	var oNext=document.getElementById('next');
      	var oUl=document.getElementById('listul');
      	var aLi=oUl.getElementsByTagName('li');
        var aImg=["images/banner01.jpg","images/banner02.jpg","images/banner03.jpg","images/banner04.jpg","images/banner05.jpg"];
        var num=0;
        var timer=null;
        var tab=true;
          oPre.onclick=function (){
            		  stop();
        		    	num--;
        		    	if(num==-1){
        		           num=aImg.length-1;
        		    	}
        		      oPic.setAttribute("src",aImg[num]);
        		      showLi(num);
                  play();
            };
            oNext.onclick=function (){
                		 stop();         
            		    	num++;
            		    	if(num==aImg.length){
            		    		num=0;
            		    	}
            		    	oPic.setAttribute("src",aImg[num]);
            		    	showLi(num);
                	     play();
             };
              oNext.onmouseover=function(){
              	stop();
              }
              oNext.onmouseout=function(){
              	play();
              }
              oPre.onmouseover=function (){
              	stop();
              }
              oPre.onmouseout=function (){
              	play();
              };

              for(var i=0;i<aLi.length;i++){
              	aLi[i].index=i;
              	aLi[i].onmouseover=function (){
              	   stop();
                   showLi(this.index);
              	};

                 function showLi(index){
                        for(var j=0;j<aLi.length;j++){
                        	 aLi[j].className="";
                        }
                        aLi[index].className="act";
                        num=index;
                        oPic.setAttribute("src",aImg[index]);
                 };
               }

              	 function play(){
              			 	timer=setInterval(function (){
              			        oNext.onclick();
              			 	},3000);
              	 };
              	 function stop(){
              	 	clearInterval(timer);
              	 };
              	 oPic.onmouseover=stop;
              	 oPic.onmouseout=play;
              	 play();



//买手推荐上衣自动轮播图
var oCloth=document.getElementById("cloth");
var oMeiyiimg=document.getElementById("meiyisl");
var oCir=document.getElementById("cir");
var aSmallli=oCir.getElementsByTagName("li");
var oMeiyiTxt=document.getElementById("btxt");
var aMeiyiimg=["images/meiyislide1.jpg","images/meiyislide2.jpg","images/meiyislide3.jpg"];
var aMeiyitxt=["百搭T恤 新品放肆买","时髦露肩 性感一夏","时髦背心清凉购"];
var cont=null;
var aa=0;
 aSmallli[0].className="hong";
oMeiyiimg.setAttribute("src",aMeiyiimg[0]);
// oMeiyiTxt.childNodes[0].nodeValue=aMeiyitxt[0];
oMeiyiTxt.innerHTML=aMeiyitxt[0];
function MeiyiMove(){ 
	cont=setInterval(function (){	
		  aa++;
		  if(aa>aMeiyiimg.length-1){
            aa=0;
		  }
		showCir(aa);
         oMeiyiimg.setAttribute("src",aMeiyiimg[aa]);
         oMeiyiTxt.innerHTML=aMeiyitxt[aa];
	},2000);
	// oMeiyiimg.setAttribute("src",aMeiyiimg[0]);
};
    MeiyiMove();
   function showCir(index){
          for(var j=0;j<aSmallli.length;j++){
          	 aSmallli[j].className="";
          }
         aSmallli[index].className="hong";
         oMeiyiimg.setAttribute("src",aMeiyiimg[index]);
         oMeiyiTxt.innerHTML=aMeiyitxt[index];
   };
   function closeMove(){
      clearInterval(cont);
   };
     for(var i=0;i<aSmallli.length;i++){
    	aSmallli[i].index=i;
    	aSmallli[i].onmouseover=function (){
         showCir(this.index);
      }
	}
    oMeiyiimg.onmouseover=closeMove;
    oMeiyiimg.onmouseout=MeiyiMove;

};