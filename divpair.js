var arr=[14,15];
var count=0;
var res=[];
for(i=0;i<arr.length;i++)
{
    for(j=0;j<=arr[i];j++)
    {
        if(arr[i]%j==0)
        {
            count++;
            //console.log(j);
        }
    }
    res.push(count);
    count=0;
}
console.log(res);
for(i=0;i<res.length;i++)
{
    if(res[i]==res[i+1])
    {
        console.log('pair');
    }
}