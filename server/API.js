const express = require('express');
const { v4 } = require('uuid');

const router = new express.Router();

const sentence =
  "Sea-floor maps released by the US National Oceanic and Atmospheric Administration in revealed the mechanisms behind Mavericks' waves. A long, sloping ramp leads to the surface. The ramp slows the propagation of the wave over it. The wave over the deep troughs on each side of the ramp continues at full speed forming two angles in the wavefront centered over the boundaries between the ramp and the troughs. The result of this is a U-shaped or V-shaped wavefront on the ramp that contains the wave energy from the full width of the ramp. This U-shaped or V-shaped wave then collapses into a small area at the top center of the ramp with tremendous force";

const words = sentence
  .replace(/[^ A-Za-z-]/g, '')
  .toLowerCase()
  .split(' ')
  .map(w => ({ word: w, id: v4() }));

router.use(express.json());
router.get('/words', (req, res) => res.json(words));

router.post('/words', (req, res) => {
  const word = { id: v4(), word: req.body.word };
  words.unshift(word);
  return res.json(word);
});

router.delete('/words/:id', (req, res) => {
  const deletedWord = words.splice(
    words.findIndex(w => w.id === req.params.id),
    1,
  );
  return res.json(deletedWord);
});

module.exports = router;
