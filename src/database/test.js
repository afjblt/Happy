const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
  
  await saveOrphanage(db, {
  
  })

  const selectedOrphanages = await db.all("SELECT * FROM orphanages")

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
})