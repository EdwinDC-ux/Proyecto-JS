

/*input*/
/*

*/
/*output*/
/*
[
    {
        version:"1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"1.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"1.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"1.3",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    },
    {
        version:"2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"2.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },{
                version:"2.1.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"2.1.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    },
    {
        version:"3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.",
        subVersions:[
            {
                version:"3.1",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"3.2",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            },
            {
                version:"3.3",
                name:"Lorem ipsum dolor sit.",
                description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
            }
        ]
    }
]*/

var versions = [
    {
        version:"1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"1.3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },{
        version:"2.1.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"2.1.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.1",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.2",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    },
    {
        version:"3.3",
        name:"Lorem ipsum dolor sit.",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi."
    }
]

versions.sort(function (a, b){
    return (a.version - b.version)
})
//console.log(versions)

items = [ {id:1, value:3, perc:0.5}, {id:2, value:2, perc:0.3}, {id:3, value:1, perc:0.2} ]
items.sort(function (a, b){
    return (a.value - b.value)
})