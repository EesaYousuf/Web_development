// way 1 : using functions
let arr = [99,88,75, 354,102, 225, 105];
function recursiveBubbleSort(array, length) {
  if (length == 1) {
    return;
  }
  for (let i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  recursiveBubbleSort(array,length-1)
}

recursiveBubbleSort(arr, arr.length);
console.log(arr)


// way 2 : using for loops only
let array=[100,12,32,88,43,22,11,9,0]
let temp=0;
for(let i =0; i<array.length;i++)
{
    for(let j=0; j<array.length;j++)
    {
        if(array[j]>array[j+1])
        {
            temp=array[j]
            array[j]=array[j+1]
            array[j+1]=temp
        }
    }
}
console.log(array)
