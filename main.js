Webcam.set
(
{
   height:350,
   width:350,
   image_format:"png",
   quality:90
}
)
 camera=document.getElementById("camera");
 Webcam.attach("#camera");

 function takeSnapshot()
 {
    Webcam.snap(function(data_uri)
    {
       document.getElementById("result").innerHTML="<img id='capture_image'src='"+data_uri+"'/>";
    }
    )
 }

 console.log("ml5 version", ml5.version);

 function speak()
 {
   var synth= window.speechSynthesis;
   speak_1_data="the first prediction is"+ speak_1;
   speak_2_data="and the second prediction is"+ speak_2;
   var utterThis= new SpeechSynthesisUtterance(speak_1_data+speak_2_data);
   utterThis.rate=0.7;
   synth.speak(utterThis);
 }

 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z7zWJG3Kg/model.json",modelLoaded);
 function modelLoaded()
 {
   console.log(modelLoaded); 
 }

function predict()
{
   img=document.getElementById('capture_image');
   classifier.classify(img, gotResult)
}

function gotResult(error,result)
{
   if (error)
   {
      console.log(error);
   }

    else 
    {
      console.log(result);
       document.getElementById("result_emotion_name").innerHTML=result[0].label;
       document.getElementById("update_emoji").innerHTML=result[0].label;

       document.getElementById("result_emotion_name2").innerHTML=result[1].label;
       document.getElementById("update_emoji2").innerHTML=result[1].label;

       speak_1=result[0].label;
       speak_2=result[1].label;

       speak()
       {
         if (result[0].label=="happy")
         {
           document.getElementById("update_emoji").innerHTML="&#128522";
         }
         
         if (result[0].label=="sad")
         {
           document.getElementById("update_emoji").innerHTML="&#128532";
         }

         if (result[0].label=="angry")
         {
           document.getElementById("update_emoji").innerHTML="&#18548";
         }


         if (result[1].label=="happy")
         {
           document.getElementById("update_emoji2").innerHTML="&#128522";
         }

         if (result[1].label=="sad")
         {
           document.getElementById("update_emoji2").innerHTML="&#128532";
         }

         if (result[1].label=="angry")
         {
           document.getElementById("update_emoji2").innerHTML="&#18548";
         }
      }


    }

}
