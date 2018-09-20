
const main = () => {
    console.log('Main function')
}

module.exports = main

if(!module.parent){
    main()
}