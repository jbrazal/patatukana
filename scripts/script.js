var app = angular.module("patatuna", []);
app.controller('ctrl-patatu', function ($scope) {

$scope.chk_font4 = true;  //select default font

var initText = " A b k d E g h I l n \n";
initText = initText + " N O p r s t U w y \n";
initText = initText + " k ke ki ko ku \n";
initText = initText + " b+ b= b \n";
initText = initText + " . , ? ! ' \" ";

    $scope.p_input = initText;
    $scope.m_bgColor = "#ffffff";

    $scope.changeColor = function () {
        $scope.out_style = {
            "color": $scope.m_ftColor,
            "background-color": $scope.m_bgColor
        };
    };

    $scope.sec_choice = function(m){
        // $scope.sec_demo_vis = !$scope.sec_demo_vis ;
        // $scope.sec_history_vis = !$scope.sec_history_vis;

        $scope.sec_demo_vis = false;
        $scope.sec_history_vis = false;
        $scope.sec_about_vis = false;

        console.log(m);
        switch(m){
            case 1:
                $scope.sec_demo_vis = true;
                console.log("demo");
                break;
            case 2:
                $scope.sec_history_vis = true;
                console.log("hist");
                break;
            case 3:
                $scope.sec_about_vis = true;
                console.log("about");
            break;
            default:

        }
    };
});