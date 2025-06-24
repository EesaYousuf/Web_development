// SIMPLE SEARCHING TECHNIQUE
let arr=[]
for(let i=0 ;i<10;i++)
{
  arr[i]=Number(prompt("Enter number  max 10 elemnts"+i))
}
let check =prompt("Do you wany to see elemts of array yes or no")
if (check==="yes")
{
  console.log(arr)
}
let find=prompt("do you want to find elemnsts in array enter yes  ")
if (find==="yes")
{
let tofind=Number(prompt("Enter number to find in array"))
for(let i=0;i<arr.length;i++)
{
  if (arr[i]===tofind)
  {
    console.log("Found at index",i)
  }
  
}
}
