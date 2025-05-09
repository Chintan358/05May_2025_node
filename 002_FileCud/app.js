
// var i = process.argv[0]
// console.log(i);
// var j = process.argv[1]
// console.log(j);
// var a = process.argv[2] 
// console.log(a);

const yargs = require("yargs")
const file = require("./file")
yargs.command({
    command : "add",
    builder:{
        name : {
            type:String
        },
        email : {
            type:String
        }
    },
    handler : function(args){
        
        const data ={
            name : args.name,
            email : args.email
        }
        file.adddata(data)
        
    }
})

yargs.command({
    command : "view",
    handler : function(){
        file.viewData()
        
    }
})

yargs.command({
    command:"remove",
    builder : {
        name:{
            type:String
        }
    },
    handler : function(argv){
        file.removedata(argv.name)
    }
})

yargs.argv