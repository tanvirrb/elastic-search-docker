const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

async function run () {
    await client.indices.delete({ index: 'game-of-thrones' });
}

run().catch(console.log)
