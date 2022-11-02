

function check_prime(num){

var cnt=0;

for(var i=1;i<=num;i++){
if(num%i==0)
{
cnt++;
}
}

if(cnt==2){
return true;
}
else
{return false;}

}

var ans=check_prime(13);

if(ans==true)
console.log("prime");
else
console.log("not prime");



