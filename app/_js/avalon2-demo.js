require("../_scss/avalon2-demo.scss");
/*ms-controller*/
avalon.define({
    $id: "AAA",
    name: "liger",
    color: "green"
});
avalon.define({
    $id: "BBB",
    name: "sphinx",
    color: "red"
});
avalon.define({
    $id: "CCC",
    name: "dragon", //不存在color
    color: "blue"

});
avalon.define({
    $id: "DDD",
    name: "sirenia" //不存在color

});

/*ms-important*/
avalon.define({
    $id: "aaa",
    name: "liger",
    color: "green"
});
avalon.define({
    $id: "bbb",
    name: "sphinx",
    color: "red"
});
avalon.define({
    $id: "ccc",
    name: "dragon" //不存在color

});
avalon.define({
    $id: "ddd",
    name: "sirenia" //不存在color

});
/*ms-attr*/
// var s=["1","2","sss"];
var at=avalon.define({
    $id:'attr',
    toggle:true,
    width:"1px",
    array:[]

});
at.obj = {title: 'title', algin: 'left'};
at.width="2px";
at.height="3px";
at.array=[{aa:1,bb:2}];
// at.array[0]={aa:11};

console.log(at.array[0].aa)
setTimeout(function () {
    // at.width="6px";
    // at.array=[{aa:3,bb:4}];
    at.array[0].aa="99999";
    console.log(at.array[0].aa)
},7000);


/*bug*/
var vm = avalon.define({
    $id: "tests",
    test1: "点击测试按钮没反应 绑定失败"
})
console.log(vm.test1)
vm.one = function () { //不能再追加此方法
    vm.test1 = "绑定成功"
    console.log(vm.test1)
};
// console.log(vm)