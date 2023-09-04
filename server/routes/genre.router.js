const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  let id = req.params.id
  console.log('got id:', id)
  const queryText = `SELECT "name" FROM "genres"
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movie_id" = $1;`

  const queryparams = [id]

  pool.query(queryText,queryparams)
      .then(result => {
        res.send(result.rows)
      }).catch((error) => {
        res.sendStatus(500)
      })
});

module.exports = router;