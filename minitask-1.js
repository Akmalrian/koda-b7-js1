const who = {
    lah : "siapa",
    am: { i:"Akmal Oktarian" },
    Siapa:"dia"
    
}
console.log(who.am.i)

const hello = {
    lah : "siapa",
    world: "Hello World",
    Siapa:"dia"
    
}
console.log(hello.world)

const obj = {
    lah : "siapa",
    str: ["Hello World",
        ["nol","satu",["nol","satu","dua",{koda : [{tech : {academy : "Koda Tech Academy"}},"satu"]}]],"dua"],
    Siapa:"dia"
    
}
console.log(obj.str[1][2][3].koda[0].tech["academy"])

const my =[
    lah = {very : {best : ["nol",{sport : {is : "Football"}}]} },
    yah = "oke"
]
console.log(my[0].very["best"][1].sport.is)
