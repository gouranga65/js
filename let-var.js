function Name() {
    let myName="gouranga";
    console.log(myName); 
    if (true) {
        let Lastname="mahato";
        console.log("inner "+Lastname);
        console.log("inner "+myName);
    }
    console.log("inner "+Lastname);
}
Name();