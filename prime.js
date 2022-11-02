

function check_prime(number){

var cnt=0;

for(var i=1;i<=number;i++){
if(number%i==0)
{
cnt++;
}
}

if(cnt==2){
return true;
}
else
return false;

}

var answer=check_prime(13);

if(answer==true)
console.log("prime number");
else
console.log("not a prime number");



