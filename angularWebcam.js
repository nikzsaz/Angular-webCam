var MyApp=angular
    .module("myapp",[])
    .controller("mycontroller",function($scope){
        // Trying to get these element and put in the scope variable
            $scope.video = document.getElementById('video');
            $scope.canvas = document.getElementById('canvas');
            $scope.context = canvas.getContext('2d');
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;
            if(navigator.getUserMedia){
                    navigator.getUserMedia({video:true},streamWebCam,throwError);
            }
            function streamWebCam(stream){
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }
            function throwError(e){
                alert(e.name);
            }
            // To get the image posted on canvas
           $scope.snap = function(){
                $scope.canvas.width = video.clientWidth;
                $scope.canvas.height = video.clientHeight;
                $scope.context.drawImage(video,0,0);
            }
        });
