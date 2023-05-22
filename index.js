function distanceFromHqInBlocks(block) {
    if (block > 42) 
     return block - 42

    else if (block < 42)
     return 42 - block
}

function distanceFromHqInFeet(block) {
    let distance = distanceFromHqInBlocks(block)
    return (distance * 264)
}

function distanceTravelledInFeet(a, b) {
   if (b>a) 
    return ((b - a) * 264)

   else 
    return((a - b) * 264)
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400)
     return 0

    else if (feet >= 400 && feet <= 2000)
     return ((feet - 400) * 0.02)

    else if (feet > 2000 && feet <=2500)
     return 25

    else if (feet > 2500)
     return 'cannot travel that far'
}