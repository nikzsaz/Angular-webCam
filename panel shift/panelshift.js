var MyApp=angular
    .module("myapp",[])
    .controller("mycontroller",function($scope){
        $scope.element = [];
        $scope.color;
        // then take the object from the current detail and send the response to the server
        var initialValue = 0;
        $scope.process = function(item){
             $scope.name = "";
            $scope.address = "";
            $scope.status = "";
            $scope.name = item.name;
            $scope.name = (typeof $scope.name === "undefined"  || $scope.name == null)?"":$scope.name;
            $scope.address = item.address;
            $scope.address = (typeof $scope.address === "undefined" || $scope.address == null)?"":$scope.address;
            $scope.status = item.status;
            $scope.status = (typeof $scope.status === "undefined" || $scope.status == null)?"":$scope.status;
            if($scope.status == "entry"){
                $scope.color = "green";
            }else if($scope.status == "exit"){
                $scope.color = "blue";
            }else{
                $scope.color = "red";
            }
            $scope.element.unshift({
                name : $scope.name,
                address : $scope.address,
                status : $scope.status,
                color : $scope.color,
            })
            $scope.item = "";
            console.log("This is key up");
        }
        /**
        $scope.printDiv = function(divName) {
                var printContents = document.getElementById(divName).innerHTML;
                var originalContents = document.body.innerHTML;
                var logoContent = document.getElementById("logo").outerHTML;

                document.body.innerHTML = printContents;
                window.print();
                document.body.innerHTML = originalContents;
}**/
        });
