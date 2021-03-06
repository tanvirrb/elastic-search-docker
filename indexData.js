const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })
const faker = require('faker')

async function run () {
    // Let's start by indexing some data
    for( let i=0; i<=100; i++ ) {
        await client.index({
            index: 'game-of-thrones',
            document: {
                character: `${faker.name.firstName()} ${faker.name.lastName()}`,
                quote: faker.lorem.words()
            }
        })
    }

    // here we are forcing an index refresh, otherwise we will not
    // get any result in the consequent search
    await client.indices.refresh({ index: 'game-of-thrones' })
}

run().catch(console.log)
