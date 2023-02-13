exports.handler = async function(event, context){
    // TEST PRODUCT INFO
    products = [
        {
            id: 001,
            name: 'Digital Planner',
            price: 10.99,
            imgSrc: 'https://images.unsplash.com/photo-1514782831304-632d84503f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMHBsYW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 002,
            name: 'Kawaii Digital Stickers',
            price: 2.99,
            imgSrc: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        },
        {
            id: 003,
            name: 'Test Digital Stickers',
            price: 3.50,
            imgSrc: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        },
        {
            id: 004,
            name: 'Homework Digital Planner',
            price: 5.00,
            imgSrc: 'https://images.unsplash.com/photo-1606327054476-256fc9690fe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbCUyMHBsYW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 005,
            name: 'Finance Digital Organizer',
            price: 6.35,
            imgSrc: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        },
        {
            id: 006,
            name: 'Random Digital Journal',
            price: 7.75,
            imgSrc: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        },
    ]
    return{
        statusCode: 200,
        body: JSON.stringify({data: products})
    }
}