const listOfFortunes = [
   "A faithful friend is a strong defense",
   "A hunch is creativity trying to tell you something",
   "A golden egg of opportunity falls into your lap this month",
   "A lifetime of happiness lies ahead of you",
   "A short pencil is usually better than a long memory any day."
]

const feelings = [

];

function getFortune (req, res) {
  let randomNum = Math.floor(Math.random() * listOfFortunes.length);
  console.log(listOfFortunes[randomNum])
  res.status(200).send(listOfFortunes[randomNum])
}

function updateFeelingAboutFortune (req, res) {
  console.log(req.body)
  feelings.push(req.body)
  console.log(feelings)
  res.status(200).send('Feedback submitted')
}

function getAllFortunes (req, res) {
  res.status(200).send(listOfFortunes)
}



module.exports = {
  getFortune,
  updateFeelingAboutFortune,
  getAllFortunes


}