function solution(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {    
    return Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) 
        && Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight);
}
