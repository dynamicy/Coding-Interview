function solution(picture: string[]): string[] {
    const width = picture.length;
    const height = picture[0].length;
    const boxHeight = height + 2;
    const boxWidth = width + 2;
    const asterisks = new Array(boxHeight).fill('*').join('');
    let newPicture = [];
    
    newPicture[0] = asterisks;
    for (let i = 0; i<picture.length; i++) {        
        newPicture[i+1] = '*' + picture[i] + '*';
    }
    newPicture[boxWidth -1] = asterisks;
    return newPicture;
}
