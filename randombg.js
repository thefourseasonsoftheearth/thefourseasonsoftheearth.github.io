
<script>
function randombg(){
const possibleVideos = ["Images/lol2", "Images/lol"];

//Sir, what is insanity?
const randomNum = Math.floor( Math.random() * (possibleVideos.length-1) )
const randomVideo = possibleVideos[ randomNum ];

const myVid = document.getElementById('background-video');

myVid.src = randomVideo;
myVid.load();
myVid.play();
}
</script>