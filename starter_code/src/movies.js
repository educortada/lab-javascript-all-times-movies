/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
    let cleanMovies = movies.map(movie => {
      const splittedWord = movie.duration.split(' ')
      const hour = parseInt(splittedWord[0], 10)
      let minute = parseInt(splittedWord[1], 10)
      if (isNaN(minute)) minute = 0
      const duration = (hour * 60) + minute
      movie.duration = duration
      //console.log(`Title:${movie.title}, Hours:${hour}, Minutes:${minute}, Duration: ${duration}`)
      return movie
    })
  return cleanMovies
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  const sumRate = movies.reduce((accumulator, movie) => {
    const rate = parseFloat(movie.rate)
    //console.log(`Accumulator: ${accumulator}, Current rate: ${rate}`)
    return (accumulator + rate)
  }, 0)
  return parseFloat((sumRate / movies.length).toFixed(2))
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  let totalDramaMovies = 0
  let rate = 0;
  const sumRate = movies.reduce((accumulator, movie) => {   
    (movie.rate !== '') ? rate = parseFloat(movie.rate) : rate = 0
    
    if((movie.genre.length === 1) && (movie.genre.indexOf('Drama') !== -1)){
      totalDramaMovies ++
      //console.log(`Title: ${movie.title}, Accumulator: ${accumulator}, Current rate: ${rate}`)
      return (accumulator + rate)
    } else {
      return accumulator
    }
  }, 0)
  return (totalDramaMovies !== 0) ? parseFloat((sumRate / totalDramaMovies).toFixed(2)) : undefined
}

// Order by time duration, in growing order
function orderByDuration(movies){
  turnHoursToMinutes(movies)

  const orderedMovies = movies.sort((movieA, movieB) => {
    if (movieA.duration === movieB.duration) {
      if (movieA.title.toLowerCase() < movieB.title.toLowerCase()) {
        return -1;
      } else if (movieA.title.toLowerCase() > movieB.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    } else {
      return (movieA.duration - movieB.duration)
    }
    
  })
  return orderedMovies
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){

}

// Order by title and print the first 20 titles


// Best yearly rate average
