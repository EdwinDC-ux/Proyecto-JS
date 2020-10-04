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

const sortVersions = (versions) => {
    let principalVersions = []
    versions.forEach(({version,name, description}) => {
        version.length == 1 ? principalVersions.push({version,name,description,subVersions : []}) : null
    })
    return principalVersions
}

console.log(sortVersions(versions))


