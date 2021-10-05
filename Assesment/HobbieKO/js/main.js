const ViewModel = function(){
    hobbies = ko.observableArray();
    hobby = ko.observable();
    addHobbie=function (){
    hobbies.push(hobby())
    hobby("");
}
}


const vm  = new ViewModel();
ko.applyBindings(vm);

