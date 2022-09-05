function isBaseVersion(num: number): boolean {
  const badVersion = 1702766719
  return num >= badVersion
}
var solution = function(isBadVersion: any) {

  return function(n: number): number {
    let i = 1,j = n
    while(i < j) {
      // 不能使用 (i + j ) / 2 会越界
      const middle = Math.floor(i / 2 + j / 2)
      if(isBadVersion(middle)) {
        j = middle
      } else {
        i = middle + 1
      }
    }
    return j
  };
};

console.log(solution(isBaseVersion)(2126753390))
