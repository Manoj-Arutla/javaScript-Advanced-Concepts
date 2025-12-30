class Password{
    constructor(){
        console.log("Welcome to password generator");
        this.pass = "";
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let nums = "1234567890";
        let splChars = "!@#$%^&*()_+";

        if(len<3){
            console.log("your password should be atleast 3 characters long!");
        }
        else{
            let i = 0;
            while(i<len){
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += nums[Math.floor(Math.random() * nums.length)];
                this.pass += splChars[Math.floor(Math.random() * splChars.length)]
                i += 3;
            }
            this.pass = this.pass.substr(0,len)
            return this.pass;
        }
    }
}

let p = new Password();
console.log(p.generatePassword(9));;    