class collectionnumber{
    data:number[]=[]
    public push(...items:number[]){
        this.data.push(...items)
    }

    public shift():number{
        return this.data.shift()
    }
}

const numbercollection=new collectionnumber()
numbercollection.push(1,2,3,4,5)

console.log(numbercollection.shift());
