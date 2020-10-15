function foo() {
    let _this = this;
    this.name = "foo";
    this.inline = () => {
        console.log(_this.name);
    }
    this.outline = () => {
        console.log(this.name);
    }
}

let obj = new foo();
obj.inline()
obj.outline()